(function() {

    const { BrowserWindow, app } = require('electron')

    const windowStateKeeper = require('electron-window-state')
    const path = require('path')
    const url = require('url')

    let mainWindow = null

    var createMainWindow = () => {
      const userAgent = 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136'

      let mainWindowState = windowStateKeeper({
        defaultWidth: 1000,
        defaultHeight: 750
      })

      let window = new BrowserWindow({
        'x': mainWindowState.x,
        'y': mainWindowState.y,
        'width': mainWindowState.width,
        'height': mainWindowState.height,
        'titleBarStyle': 'hidden',
        webPreferences: {
          nodeIntegration: false,
          webviewTag: true
        }
      })

      window.loadURL(url.format({
        pathname: path.join(__dirname, '../../index.html'),
        protocol: 'file:',
        slashes: true
      }), { userAgent: userAgent })

      window.on('close', function(event) {
        event.preventDefault()
        window.hide()
      })

      window.on('closed', function(event) {
        event.preventDefault()
      })

      window.autoHideMenuBar = true;
      window.setMenuBarVisibility(false)

      setWindow(window)
      mainWindowState.manage(window)

      return window
    }

    var setWindow = function(w) {
        mainWindow = w
    }

    var getWindow = function() {
        return mainWindow
    }

    module.exports.createMainWindow = createMainWindow;
    module.exports.getWindow = getWindow;
    module.exports.setWindow = setWindow;
}());
