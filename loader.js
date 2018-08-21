const fs = require('fs')
const path = require('path')
const renderer = require('./renderer.js')

var current = null

var openPage = (pageName = "inbox") => {
  if (pageName == current) {
    return
  }

  current = pageName

  fs.readFile(path.join(__dirname, 'pages/' + pageName + '.html'), (err, data) => {
    if (err) {
      console.log(err)
      return
    }

    document.getElementById('content').innerHTML = data
    renderer.initPage()
  })
}

// default to email page.
openPage("inbox")

var inbox = document.getElementById('nav-inbox')
var pulse = document.getElementById('nav-pulse')
var talon = document.getElementById('nav-talon')
var purchase = document.getElementById('nav-purchase')
var slack = document.getElementById('nav-slack')
var github = document.getElementById('nav-github')
var twitter = document.getElementById('nav-twitter')

inbox.addEventListener("click", () => { openPage("inbox") })
pulse.addEventListener("click", () => { openPage("pulse") })
talon.addEventListener("click", () => { openPage("talon") })
purchase.addEventListener("click", () => { openPage("purchases") })
slack.addEventListener("click", () => { openPage("slack") })
github.addEventListener("click", () => { openPage("github") })
twitter.addEventListener("click", () => { openPage("twitter") })
