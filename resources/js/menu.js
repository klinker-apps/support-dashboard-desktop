(function() {
    const { BrowserWindow, Menu } = require('electron')
    const path = require('path')
    const url = require('url')

    var buildMenu = function(mainWindow) {
      const template = [{
          label: 'Links',
          submenu: [{
              label: 'Play Store Console',
              click() {
                  createWindow("https://play.google.com/apps/publish/?account=6337185423976596164#AppListPlace")
              }
          }, {
              label: 'Firebase Console',
              click() {
                  createWindow("https://console.firebase.google.com")
              }
          }, {
              label: 'Google Payments',
              click() {
                  createWindow("https://payments.google.com/payments/u/0/home?bcn=794839672874#subscriptionsAndServices")
              }
          }, {
              label: 'Pulse Help',
              click() {
                  createWindow("https://messenger.klinkerapps.com/help")
              }
          }, {
              label: 'Pulse Overview',
              click() {
                  createWindow("https://messenger.klinkerapps.com/overview")
              }
          }]
      }]


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

    module.exports.buildMenu = buildMenu
}());
