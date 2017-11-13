(function() {
    const { Menu } = require('electron')
    const settings = require('electron-settings')

    var buildMenu = function(mainWindow) {
      const template = [{
          label: 'Preferences',
          submenu: [{
            label: 'Show notifications',
            type: 'checkbox',
            checked: shouldShowNotifications(),
            click() {
              settings.set('show-notifications', !shouldShowNotifications() + "")
            }
          }]
      }, {
          label: 'Edit',
          submenu: [{
              role: 'undo'
          }, {
              role: 'redo'
          }, {
              type: 'separator'
          }, {
              role: 'cut'
          }, {
              role: 'copy'
          }, {
              role: 'paste'
          }, {
              role: 'pasteandmatchstyle'
          }, {
              role: 'delete'
          }, {
              role: 'selectall'
          }]
      }, {
          label: 'View',
          submenu: [{
              label: 'Reload',
              accelerator: 'CmdOrCtrl+R',
              click(item, focusedWindow) {
                  if (focusedWindow) focusedWindow.reload()
              }
          }, {
              label: 'Toggle Developer Tools',
              accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
              click(item, focusedWindow) {
                  if (focusedWindow) focusedWindow.webContents.toggleDevTools()
              }
          }, {
              type: 'separator'
          }, {
              role: 'resetzoom'
          }, {
              role: 'zoomin'
          }, {
              role: 'zoomout'
          }, {
              type: 'separator'
          }, {
              role: 'togglefullscreen'
          }]
      }, {
          role: 'window',
          submenu: [{
              role: 'minimize'
          }, {
              role: 'close'
          }]
      }, {
          role: 'help',
          submenu: [{
              label: require('electron').app.getVersion()
          }, {
              label: 'Get Help',
              click() {
                  require('electron').shell.openExternal('https://messenger.klinkerapps.com/help')
              }
          }, {
              label: 'Platform Support',
              click() {
                  require('electron').shell.openExternal('https://messenger.klinkerapps.com/overview')
              }
          }, {
              label: 'Get it on Google Play',
              click() {
                  require('electron').shell.openExternal('https://play.google.com/store/apps/details?id=xyz.klinker.messenger')
              }
          }]
      }]


      if (process.platform === 'darwin') {
          const name = require('electron').app.getName()
          template.unshift({
              label: name,
              submenu: [/*{
                  role: 'about'
              }, {
                  type: 'separator'
              }, */{
                  role: 'services',
                  submenu: []
              }, {
                  type: 'separator'
              }, {
                  label: 'Hide Pulse',
                  role: 'hide'
              }, {
                  role: 'hideothers'
              }, {
                  role: 'unhide'
              }, {
                  type: 'separator'
              }, {
                  label: 'Quit Pulse',
                  role: 'quit'
              }]
          })

          // Edit menu
          template[2].submenu.push({
              type: 'separator'
          }, {
              label: 'Speech',
              submenu: [{
                  role: 'startspeaking'
              }, {
                  role: 'stopspeaking'
              }]
          })

          // Windows menu
          template[4].submenu = [{
              label: 'Close',
              accelerator: 'CmdOrCtrl+W',
              role: 'close'
          }, {
              label: 'Minimize',
              accelerator: 'CmdOrCtrl+M',
              role: 'minimize'
          }, {
              label: 'Zoom',
              role: 'zoom'
          }, {
              type: 'separator'
          }, {
              label: 'Bring All to Front',
              role: 'front'
          }]
      } else {
          template[0].submenu.push({
              label: 'Auto-hide Menu Bar',
              type: 'checkbox',
              checked: shouldAutoHideMenuBar(),
              click() {
                  let autoHide = !shouldAutoHideMenuBar()
                  settings.set('auto-hide-menu-bar', autoHide + "")
                  mainWindow.setAutoHideMenuBar(autoHide)
                  mainWindow.setMenuBarVisibility(!autoHide)
              }
          })
      }

      const menu = Menu.buildFromTemplate(template)
      Menu.setApplicationMenu(menu)

      // if they turn on auto hide, then this should be hidden.
      // if they turn off auto hide, we will show this menu bar immediately.
      mainWindow.setMenuBarVisibility(!shouldAutoHideMenuBar())
      mainWindow.setAutoHideMenuBar(shouldAutoHideMenuBar())
    }

    function shouldShowNotifications() {
      return !settings.has('show-notifications') || settings.get('show-notifications') === "true"
    }

    function shouldAutoHideMenuBar() {
      return settings.has('auto-hide-menu-bar') && settings.get('auto-hide-menu-bar') === "true"
    }

    module.exports.buildMenu = buildMenu
}());
