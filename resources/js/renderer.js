var talon = document.getElementById('talon-reviews')
var pulse = document.getElementById('pulse-reviews')
var purchases = document.getElementById('purchases')
var admin = document.getElementById('pulse-admin')
var twitter = document.getElementById('twitter-search')

talon.addEventListener("focus", function() {
    talon.style.height = "52%"
    pulse.style.height = "16%"
    admin.style.height = "16%"
    twitter.style.height = "16%"
})

pulse.addEventListener("focus", function() {
    pulse.style.height = "52%"
    talon.style.height = "16%"
    admin.style.height = "16%"
    twitter.style.height = "16%"
})

admin.addEventListener("focus", function() {
    admin.style.height = "52%"
    talon.style.height = "16%"
    pulse.style.height = "16%"
    twitter.style.height = "16%"
})

twitter.addEventListener("focus", function() {
    twitter.style.height = "52%"
    talon.style.height = "16%"
    pulse.style.height = "16%"
    admin.style.height = "16%"
})

talon.addEventListener("dom-ready", function() {
    setTimeout(function() {
      talon.executeJavaScript(tryCatch(`document.getElementsByClassName('MKC43RB-J-e')[0].style.display = "none";`))
      talon.executeJavaScript(tryCatch(`document.getElementsByClassName('MKC43RB-J-f')[0].style.display = "none";`))
      talon.executeJavaScript(tryCatch(`document.getElementsByClassName('MKC43RB-E-h MKC43RB-j-C MKC43RB-E-i MKC43RB-Jm-a')[0].style.display = "none";`))
      talon.executeJavaScript(tryCatch(`document.getElementsByClassName('MKC43RB-p-c')[0].style.display = "none";`))
      talon.executeJavaScript(tryCatch(`document.getElementsByClassName('MKC43RB-G-h MKC43RB-s-b MKC43RB-j-u')[0].style.display = "none";`))
      talon.executeJavaScript(tryCatch(`document.getElementsByClassName('MKC43RB-j-u')[2].style.display = "none";`))
    }, 5000)
})

pulse.addEventListener("dom-ready", function() {
    setTimeout(function() {
      pulse.executeJavaScript(tryCatch(`document.getElementsByClassName('MKC43RB-J-e')[0].style.display = "none";`))
      pulse.executeJavaScript(tryCatch(`document.getElementsByClassName('MKC43RB-J-f')[0].style.display = "none";`))
      pulse.executeJavaScript(tryCatch(`document.getElementsByClassName('MKC43RB-E-h MKC43RB-j-C MKC43RB-E-i MKC43RB-Jm-a')[0].style.display = "none";`))
      pulse.executeJavaScript(tryCatch(`document.getElementsByClassName('MKC43RB-p-c')[0].style.display = "none";`))
      pulse.executeJavaScript(tryCatch(`document.getElementsByClassName('MKC43RB-G-h MKC43RB-s-b MKC43RB-j-u')[0].style.display = "none";`))
      pulse.executeJavaScript(tryCatch(`document.getElementsByClassName('MKC43RB-j-u')[2].style.display = "none";`))
    }, 5000)
})

purchases.addEventListener("dom-ready", function() {
    setTimeout(function() {
      purchases.executeJavaScript(tryCatch(`document.getElementsByClassName('MKC43RB-f-m')[0].click();`))
      purchases.executeJavaScript(tryCatch(`document.getElementsByClassName('MKC43RB-G-h MKC43RB-s-b MKC43RB-j-u')[0].style.display = "none";`))
      purchases.executeJavaScript(tryCatch(`document.getElementsByClassName('MKC43RB-j-u')[2].style.display = "none";`))
    }, 3000)
})

admin.addEventListener("dom-ready", function() {
    setTimeout(function() {
      admin.executeJavaScript(tryCatch(`document.getElementsByClassName('mdl-layout__header is-casting-shadow')[0].style.display = "none";`))
      admin.executeJavaScript(tryCatch(`document.getElementById('admin-list').style.paddingTop = "0px";`))
    }, 1500)
})

twitter.addEventListener("dom-ready", function() {
    setTimeout(function() {
      twitter.executeJavaScript(tryCatch(`document.getElementsByClassName('Grid-cell u-size1of3 u-lg-size1of4')[0].style.display = "none";`))
      twitter.executeJavaScript(tryCatch(`document.getElementsByClassName('SearchNavigation')[0].style.display = "none";`))
      twitter.executeJavaScript(tryCatch(`document.getElementsByClassName('global-nav')[0].style.display = "none";`))
      twitter.executeJavaScript(tryCatch(`document.getElementById('page-container').style.paddingTop = "0px";`))
      twitter.focus()
    }, 1000)
})

setTimeout(reloadPurchases, 1 * 60 * 1000)
setTimeout(reloadReviews, 3 * 60 * 1000)
setTimeout(reloadTwitter, 5 * 60 * 1000)

function reloadReviews() {
    talon.reload()
    pulse.reload()

    setTimeout(reloadReviews, 3 * 60 * 1000)
}

function reloadTwitter() {
    twitter.reload()
    setTimeout(reloadTwitter, 5 * 60 * 1000)
}

function reloadPurchases() {
    purchases.loadURL("https://play.google.com/apps/publish/?account=6337185423976596164#OrderManagementPlace")
    setTimeout(reloadPurchases, 1 * 60 * 1000)
}

function tryCatch(code) {
  return "try { " + code + " } catch (err) { }"
}
