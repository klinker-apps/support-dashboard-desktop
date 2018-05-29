const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const windowStateKeeper = require('electron-window-state')

const path = require('path')
const url = require('url')

const windowProvider = require('./resources/js/window-provider.js')
const menu = require('./resources/js/menu.js')

var shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
  if (windowProvider == null) {
    initialize()
  }

  windowProvider.getWindow().show()
})

if (shouldQuit) {
  app.quit()
  return
}

app.setAppUserModelId("xyz.klinker.support")
app.on('ready', createWindow)
app.on('activate', createWindow)

app.on('window-all-closed', () => {
  // used to close the app and the web socket here for non-macOS devices
  // We don't want to do that anymore, since we are able to save and restore
  // the app state.
})

app.on('before-quit', () => {
  app.exit(0)
})

function createWindow() {
  if (windowProvider.getWindow() == null) {
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
      event.preventDefault();
      windowProvider.getWindow().hide();
    })

    mainWindow.on('closed', function(event) {
        windowProvider.setWindow(null)
    })

    windowProvider.setWindow(mainWindow)
    mainWindowState.manage(mainWindow)
    menu.buildMenu(mainWindow)
  }
}
