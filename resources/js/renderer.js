var firstTime = true

var talon = document.getElementById('talon-reviews')
var pulse = document.getElementById('pulse-reviews')
var purchases = document.getElementById('purchases')
var financial = document.getElementById('financial')
var admin = document.getElementById('pulse-admin')
var twitter = document.getElementById('twitter-search')
var email = document.getElementById('email')

twitter.addEventListener('new-window', (event) => {
  try {
    require('electron').shell.openExternal(event.url)
  } catch (error) {}
})

email.addEventListener('new-window', (event) => {
  try {
    require('electron').shell.openExternal(event.url)
  } catch (error) {}
})

pulse.addEventListener("focus", function() {
    pulse.style.height = "52%"
    talon.style.height = "16%"
    admin.style.height = "16%"
    twitter.style.height = "16%"

    // show Pulse app bar
    pulse.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "flex";`))
    pulse.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-v')[2].style.display = "block";`))

    // hide Talon app bar
    talon.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "none";`))
    talon.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-v')[2].style.display = "none";`))
})

talon.addEventListener("focus", function() {
    talon.style.height = "52%"
    pulse.style.height = "16%"
    admin.style.height = "16%"
    twitter.style.height = "16%"

    // hide Pulse app bar
    pulse.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "none";`))
    pulse.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-v')[2].style.display = "none";`))

    // show Talon app bar
    talon.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "flex";`))
    talon.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-v')[2].style.display = "block";`))
})

admin.addEventListener("focus", function() {
    admin.style.height = "52%"
    talon.style.height = "16%"
    pulse.style.height = "16%"
    twitter.style.height = "16%"

    // hide Pulse app bar
    pulse.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "none";`))
    pulse.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-v')[2].style.display = "none";`))

    // hide Talon app bar
    talon.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "none";`))
    talon.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-v')[2].style.display = "none";`))
})

twitter.addEventListener("focus", function() {
    twitter.style.height = "52%"
    talon.style.height = "16%"
    pulse.style.height = "16%"
    admin.style.height = "16%"

    // hide Pulse app bar
    pulse.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "none";`))
    pulse.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-v')[2].style.display = "none";`))

    // hide Talon app bar
    talon.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "none";`))
    talon.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-v')[2].style.display = "none";`))
})

pulse.addEventListener("dom-ready", function() {
    setTimeout(function() {
      pulse.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-J-e')[0].style.display = "none";`))
      pulse.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-J-f')[0].style.display = "none";`))

      pulse.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.querySelectorAll('[role="article"]')[2].style.display = "none";`))
      pulse.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-p-c')[0].style.display = "none";`))
      pulse.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-u')[2].style.display = "none";`))

      // app bar
      pulse.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "none";`))
      pulse.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-v')[2].style.display = "none";`))

      if (firstTime) {
          pulse.focus()
          firstTime = false
      }
    }, 5000)
})

talon.addEventListener("dom-ready", function() {
    setTimeout(function() {
      talon.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-J-e')[0].style.display = "none";`))
      talon.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-J-f')[0].style.display = "none";`))

      // search/filtering section
      talon.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.querySelectorAll('[role="article"]')[2].style.display = "none";`))
      talon.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-p-c')[0].style.display = "none";`))
      talon.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-u')[2].style.display = "none";`))

      // app bar
      talon.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "none";`))
      talon.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-v')[2].style.display = "none";`))
    }, 5000)
})

if (purchases != null) {
  purchases.addEventListener("dom-ready", function() {
      setTimeout(function() {
        // close the drawer
        purchases.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-f-m')[0].click();`))

        // app bar
        purchases.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "none";`))
        purchases.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-v')[2].style.display = "none";`))
      }, 3000)
  })
}

if (financial != null) {
  financial.addEventListener("dom-ready", function() {
      setTimeout(function() {
        financial.executeJavaScript(tryCatch(`document.getElementsByClassName('AnonymousHeader__fixed-container___2WZuN')[0].style.display = "none";`))
        financial.executeJavaScript(tryCatch(`document.getElementsByClassName('StaticDashboardHeader__container___23Gpz')[0].style.display = "none";`))
        financial.executeJavaScript(tryCatch(`document.getElementsByClassName('StaticChartHeader__container___9lODt')[0].style.display = "none";`))
        financial.executeJavaScript(tryCatch(`document.getElementsByClassName('CoreLayout__container___31Gy2')[0].style.paddingTop = "0px";`))
        financial.executeJavaScript(tryCatch(`document.getElementsByClassName('ShareView__chart-container___r0zdr')[0].style.marginTop = "0px";`))
      }, 1500)
  })
}

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
    }, 1000)
})

if (purchases != null) {
  setTimeout(reloadPurchases, 3 * 60 * 1000)
}

if (financial != null) {
  setTimeout(reloadFinancial, 3 * 60 * 1000)
}

setTimeout(reloadReviews, 10 * 60 * 1000)
setTimeout(reloadTwitter, 10 * 60 * 1000)

function reloadPurchases() {
    purchases.loadURL("https://play.google.com/apps/publish/?account=6337185423976596164#OrderManagementPlace")
    setTimeout(reloadPurchases, 3 * 60 * 1000)
}

function reloadFinancial() {
    purchases.loadURL("https://analytics.amplitude.com/org/38878/chart/0yca5wq")
    setTimeout(reloadFinancial, 3 * 60 * 1000)
}

function reloadReviews() {
    talon.reload()
    pulse.reload()

    setTimeout(reloadReviews, 10 * 60 * 1000)
}

function reloadTwitter() {
    twitter.reload()
    setTimeout(reloadTwitter, 10 * 60 * 1000)
}

function tryCatch(code) {
  return "try { " + code + " } catch (err) { }"
}

function definePlayStorePrefixItem() {
  return `var item = document.querySelectorAll('[role="status"]')[0].className; item = item.substring(0, item.indexOf("-"));`
}
