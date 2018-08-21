const fs = require('fs')

var openPage = (pageName = "inbox") => {
  fs.readFile('pages/' + pageName + '.html', (err, data) => {
    document.getElementById('content').innerHTML = data
    require('./renderer.js')
  })
}

openPage("pulse")
