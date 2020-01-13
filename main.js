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

app.userAgentFallback = app.userAgentFallback = 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136'

function createWindow() {
  if (windowProvider.getWindow() == null) {
    let window = windowProvider.createMainWindow()
    menu.buildMenu(windowProvider)
  } else {
    if (process.platform === 'darwin') {
      app.dock.show()
    }

    let window = windowProvider.getWindow()
    window.show()
    menu.buildMenu(windowProvider)
  }
}
