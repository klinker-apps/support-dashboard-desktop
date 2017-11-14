var talon = document.getElementById('talon-reviews')
var pulse = document.getElementById('pulse-reviews')
var purchases = document.getElementById('purchases')

talon.addEventListener("dom-ready", function() {
    setTimeout(function() {
      talon.executeJavaScript(`document.getElementsByClassName('MKC43RB-J-e')[0].style.display = "none";`)
      talon.executeJavaScript(`document.getElementsByClassName('MKC43RB-J-f')[0].style.display = "none";`)
      talon.executeJavaScript(`document.getElementsByClassName('MKC43RB-E-h MKC43RB-j-C MKC43RB-E-i MKC43RB-Jm-a')[0].style.display = "none";`)
      talon.executeJavaScript(`document.getElementsByClassName('MKC43RB-p-c')[0].style.display = "none";`)
      talon.executeJavaScript(`document.getElementsByClassName('MKC43RB-G-k')[0].innerHTML = "Talon for Twitter";`)
    }, 4000)
})

pulse.addEventListener("dom-ready", function() {
    setTimeout(function() {
      pulse.executeJavaScript(`document.getElementsByClassName('MKC43RB-J-e')[0].style.display = "none";`)
      pulse.executeJavaScript(`document.getElementsByClassName('MKC43RB-J-f')[0].style.display = "none";`)
      pulse.executeJavaScript(`document.getElementsByClassName('MKC43RB-E-h MKC43RB-j-C MKC43RB-E-i MKC43RB-Jm-a')[0].style.display = "none";`)
      pulse.executeJavaScript(`document.getElementsByClassName('MKC43RB-p-c')[0].style.display = "none";`)
      pulse.executeJavaScript(`document.getElementsByClassName('MKC43RB-G-k')[0].innerHTML = "Pulse SMS";`)
    }, 4000)
})

purchases.addEventListener("dom-ready", function() {
    setTimeout(function() {
      purchases.executeJavaScript(`document.getElementsByClassName('MKC43RB-f-m')[0].click();`)
    }, 3000)
})
