// const fs = require('fs')
// const path = require('path')
// const renderer = require('./renderer.js')

var current = null;

var openPage = (pageName = "gmail") => {
  if (pageName == current) {
    return;
  }

  current = pageName;

  // document.getElementById('content').innerHTML = '<object type="text/html" data="pages/' + pageName + '.html"></object>'
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "pages/" + pageName + ".html", true);
  xhr.onreadystatechange = function() {
    document.getElementById("content").innerHTML = this.responseText;
  };
  xhr.send();
  // fs.readFile(path.join(__dirname, 'pages/' + pageName + '.html'), (err, data) => {
  //   if (err) {
  //     console.log(err)
  //     return
  //   }

  //   document.getElementById('content').innerHTML = data
  //   // renderer.initPage()
  // })
};

// default to email page.
openPage("gmail");

// this defines the icons on the left and their order
let navString = "";
let navLinks = [
  "gmail",
  "slack",
  "pulse",
  "talon",
  "purchase",
  "github",
  "twitter",
  "cloud-consoles",
  "jenkins"
];

for (let i = 0; i < navLinks.length; i++) {
  navString +=
    '<img id="nav-' +
    navLinks[i] +
    '" class="nav-item" src="resources/images/' +
    navLinks[i] +
    '.png">';
}

document.getElementById("sidebar").innerHTML = navString;

for (let i = 0; i < navLinks.length; i++) {
  let element = document.getElementById("nav-" + navLinks[i]);
  element.addEventListener("click", () => {
    openPage(navLinks[i]);
  });
}
