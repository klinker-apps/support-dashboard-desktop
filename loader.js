const fs = require('fs')
var current = null

var openPage = (pageName = "inbox") => {
  if (pageName == current) {
    return
  }

  current = pageName

  fs.readFile('pages/' + pageName + '.html', (err, data) => {
    document.getElementById('content').innerHTML = data
    require('./renderer.js')
  })
}

// default to email page.
openPage("inbox")

var inbox = document.getElementById('nav-inbox')
var pulse = document.getElementById('nav-pulse')
var talon = document.getElementById('nav-talon')
var purchase = document.getElementById('nav-purchase')
var github = document.getElementById('nav-github')
var twitter = document.getElementById('nav-twitter')

inbox.addEventListener("click", () => { openPage("inbox") })
pulse.addEventListener("click", () => { openPage("pulse") })
talon.addEventListener("click", () => { openPage("talon") })
purchase.addEventListener("click", () => { openPage("purchases") })
github.addEventListener("click", () => { openPage("github") })
twitter.addEventListener("click", () => { openPage("twitter") })
