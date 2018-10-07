const electron = require('electron')
const app = electron.app

const gotLock = app.requestSingleInstanceLock()

if (!gotLock) {
  app.exit(0)
  return;
}

const windowProvider = require('./resources/js/window-provider.js')
const menu = require('./resources/js/menu.js')

app.on('second-instance', () => {
  windowProvider.getWindow().show()
})

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
    let window = windowProvider.createMainWindow()
    menu.buildMenu(window)
  } else {
    if (process.platform === 'darwin') {
      app.dock.show()
    }

    let window = windowProvider.getWindow()
    window.show()
    menu.buildMenu(window)
  }
}
