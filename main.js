const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const {autoUpdater} = require("electron-updater")
const windowStateKeeper = require('electron-window-state')

const path = require('path')
const url = require('url')

const storage = require('electron-json-storage')
const windowProvider = require('./resources/js/window-provider.js')
const menu = require('./resources/js/menu.js')

function createWindow() {
    let mainWindowState = windowStateKeeper({
        defaultWidth: 1000,
        defaultHeight: 750
    })

    var mainWindow = new BrowserWindow({
        'x': mainWindowState.x,
        'y': mainWindowState.y,
        'width': mainWindowState.width,
        'height': mainWindowState.height
    })

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.on('close', function(event) {
        if (isMac()) {
          event.preventDefault();
          windowProvider.getWindow().hide();
        }
    })

    mainWindow.on('closed', function(event) {
        windowProvider.setWindow(null)
    })

    windowProvider.setWindow(mainWindow)
    mainWindowState.manage(mainWindow)
    menu.buildMenu(mainWindow)
}

app.on('ready', createWindow)
app.on('window-all-closed', function() {
    // we don't want to quit here, so that the web socket continues to run in the background
    // if (!isMac()) {
    //   app.quit()
    // }
})

app.on('activate', function() {
    if (windowProvider.getWindow() === null) {
        createWindow()
    } else if (isMac()) {
        windowProvider.getWindow().show()
    }
})

app.on('before-quit', () => {
  // not fired when the close button on the window is clicked
  if (isMac()) {
    // need to force a quit as a workaround here to simulate the osx app hiding behaviour
    // Somehow sokution at https://github.com/atom/electron/issues/444#issuecomment-76492576 does not work,
    // e.prevent default appears to persist

    // might cause issues in the future as before-quit and will-quit events are not called
    app.exit(0)
  }
});

// Auto updater support
autoUpdater.on('update-downloaded', (info) => {
  setTimeout(function() {
    try {
      autoUpdater.quitAndInstall()
    } catch (error) { }
  }, 5000)
})

app.on('ready', function()  {
  try {
    autoUpdater.checkForUpdates()
  } catch (error) { }
})



function isMac() {
  return process.platform === 'darwin'
}
