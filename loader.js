const fs = require('fs')

fs.readFile('pages/twitter.html', (err, data) => {
   document.getElementById('content').innerHTML = data
   require('./renderer.js')
})
