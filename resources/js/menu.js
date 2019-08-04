(function() {
    const { BrowserWindow, Menu } = require('electron')
    const path = require('path')
    const url = require('url')

    var buildMenu = function(mainWindow) {
      const template = [{
          label: 'Links',
          submenu: [{
              label: 'Ratings Calculator',
              click() {
                  startRatingsCalculator()
              }
          },{
              label: 'Google Translate',
              click() {
                  createWindow("https://translate.google.com")
              }
          },{
              label: 'Pulse Admin',
              click() {
                  createWindow("https://messenger.klinkerapps.com/admin.html")
              }
          },{
              label: 'Purchase History',
              click() {
                  createWindow("https://play.google.com/apps/publish/?account=6337185423976596164#OrderManagementPlace")
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
    },]


    if (process.platform === 'darwin') {
        const name = require('electron').app.getName()
        template.unshift({
            label: name,
            submenu: [{
                role: 'about'
            }, {
                type: 'separator'
            }, {
                label: 'Hide Dashboard',
                role: 'hide'
            }, {
                role: 'hideothers'
            }, {
                role: 'unhide'
            }, {
                type: 'separator'
            }, {
                label: 'Quit Dashboard',
                role: 'quit'
            }]
        })
    } else {
      // Windows menu
      template[3].submenu.push({ type: "separator" });
      template[3].submenu.push({
        accelerator: "Alt+M",
        click: () => {
          const win = windowProvider.getWindow();
          const menuVisible = win.isMenuBarVisible();

          win.setAutoHideMenuBar(menuVisible);
          win.setMenuBarVisibility(!menuVisible);
        },
        label: "Toggle Menu Bar Visibility",
      });
    }

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
  }

  function createWindow(link) {
    let window = new BrowserWindow({
      width: 410,
      height: 650,
      x: 0,
      y: 0
    })

    window.loadURL(link)
  }

  function startRatingsCalculator() {
    let window = new BrowserWindow({
      width: 240,
      height: 220,
      x: 400,
      y: 400
    })

    window.loadURL(url.format({
        pathname: path.join(__dirname, '../../ratings.html'),
        protocol: 'file:',
        slashes: true
    }))
  }

  module.exports.buildMenu = buildMenu
}());
