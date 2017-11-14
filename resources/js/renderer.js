var talon = document.getElementById('talon-reviews')
var pulse = document.getElementById('pulse-reviews')
var purchases = document.getElementById('purchases')
var admin = document.getElementById('pulse-admin')

talon.addEventListener("dom-ready", function() {
    setTimeout(function() {
      talon.executeJavaScript(`document.getElementsByClassName('MKC43RB-J-e')[0].style.display = "none";`)
      talon.executeJavaScript(`document.getElementsByClassName('MKC43RB-J-f')[0].style.display = "none";`)
      talon.executeJavaScript(`document.getElementsByClassName('MKC43RB-E-h MKC43RB-j-C MKC43RB-E-i MKC43RB-Jm-a')[0].style.display = "none";`)
      talon.executeJavaScript(`document.getElementsByClassName('MKC43RB-p-c')[0].style.display = "none";`)
      talon.executeJavaScript(`document.getElementsByClassName('MKC43RB-G-h MKC43RB-s-b MKC43RB-j-u')[0].style.display = "none";`)
      talon.executeJavaScript(`document.getElementsByClassName('MKC43RB-j-u')[2].style.display = "none";`)
    }, 5000)
})

pulse.addEventListener("dom-ready", function() {
    setTimeout(function() {
      pulse.executeJavaScript(`document.getElementsByClassName('MKC43RB-J-e')[0].style.display = "none";`)
      pulse.executeJavaScript(`document.getElementsByClassName('MKC43RB-J-f')[0].style.display = "none";`)
      pulse.executeJavaScript(`document.getElementsByClassName('MKC43RB-E-h MKC43RB-j-C MKC43RB-E-i MKC43RB-Jm-a')[0].style.display = "none";`)
      pulse.executeJavaScript(`document.getElementsByClassName('MKC43RB-p-c')[0].style.display = "none";`)
      pulse.executeJavaScript(`document.getElementsByClassName('MKC43RB-G-h MKC43RB-s-b MKC43RB-j-u')[0].style.display = "none";`)
      pulse.executeJavaScript(`document.getElementsByClassName('MKC43RB-j-u')[2].style.display = "none";`)
    }, 5000)
})

purchases.addEventListener("dom-ready", function() {
    setTimeout(function() {
      purchases.executeJavaScript(`document.getElementsByClassName('MKC43RB-f-m')[0].click();`)
      purchases.executeJavaScript(`document.getElementsByClassName('MKC43RB-G-h MKC43RB-s-b MKC43RB-j-u')[0].style.display = "none";`)
      purchases.executeJavaScript(`document.getElementsByClassName('MKC43RB-j-u')[2].style.display = "none";`)
    }, 3000)
})

admin.addEventListener("dom-ready", function() {
    setTimeout(function() {
      admin.executeJavaScript(`document.getElementsByClassName('mdl-layout__header is-casting-shadow')[0].style.display = "none";`)
      admin.executeJavaScript(`document.getElementById('admin-list').style.paddingTop = "0px";`)
    }, 1500)
})
