(function() {
  var initPage = function() {
      var email = document.getElementById('email')

      var pulseReviews = document.getElementById('pulse-reviews')
      var pulseFirebase = document.getElementById('pulse-firebase')
      var pulseAdmin = document.getElementById('pulse-admin')

      var talonReviews = document.getElementById('talon-reviews')
      var talonFirebase = document.getElementById('talon-firebase')

      var purchases = document.getElementById('purchases')
      var financial = document.getElementById('financial')

      var slack = document.getElementById('slack')
      var github = document.getElementById('github-notifications')
      var twitter = document.getElementById('twitter-search')
      var googlePlus = document.getElementById('google-plus')

      let openNewWindow = [ twitter, github, slack, googlePlus, email]
      for (let i = 0; i < openNewWindow.length; i++) {
        if (openNewWindow[i] != null) {
          openNewWindow[i].addEventListener('new-window', (event) => {
            try {
              require('electron').shell.openExternal(event.url)
            } catch (error) {}
          })
        }
      }

      let reviews = [ pulseReviews, talonReviews ]
      for (let i = 0; i < reviews.length; i++) {
        if (reviews[i] != null) {
          let review = reviews[i]
          review.addEventListener("focus", function() {
            // show app bar
            review.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "flex";`))
            review.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-v')[2].style.display = "block";`))
          })

          review.addEventListener("dom-ready", function() {
            setTimeout(function() {
              review.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-J-e')[0].style.display = "none";`))
              review.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-J-f')[0].style.display = "none";`))

              // search/filtering section
              review.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.querySelectorAll('[role="article"]')[2].style.display = "none";`))
              review.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-p-c')[0].style.display = "none";`))
              review.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-u')[2].style.display = "none";`))

              // close the drawer
              review.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-f-m')[0].click();`))

              // app bar
              review.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "none";`))
              review.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-v')[2].style.display = "none";`))
            }, 7000)
          })
        }
      }

      if (purchases != null) {
        purchases.addEventListener("dom-ready", function() {
          setTimeout(function() {
            // close the drawer
            purchases.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-f-m')[0].click();`))

            // app bar
            purchases.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "none";`))
            purchases.executeJavaScript(tryCatch(definePlayStorePrefixItem() + `document.getElementsByClassName(item + '-j-v')[2].style.display = "none";`))
          }, 5000)
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

      if (pulseAdmin != null) {
        pulseAdmin.addEventListener("dom-ready", function() {
          setTimeout(function() {
            pulseAdmin.executeJavaScript(tryCatch(`document.getElementsByClassName('mdl-layout__header is-casting-shadow')[0].style.display = "none";`))
            pulseAdmin.executeJavaScript(tryCatch(`document.getElementById('admin-list').style.paddingTop = "0px";`))
          }, 3000)
        })
      }

      if (twitter != null) {
        twitter.addEventListener("dom-ready", function() {
          setTimeout(function() {
            // twitter.executeJavaScript(tryCatch(`document.getElementsByClassName('Grid-cell u-size1of3 u-lg-size1of4')[0].style.display = "none";`))
            // twitter.executeJavaScript(tryCatch(`document.getElementsByClassName('SearchNavigation')[0].style.display = "none";`))
            // twitter.executeJavaScript(tryCatch(`document.getElementsByClassName('global-nav')[0].style.display = "none";`))
            // twitter.executeJavaScript(tryCatch(`document.getElementById('page-container').style.paddingTop = "0px";`))
          }, 3000)
        })
      }

      // setTimeout(reloadPurchases, 3 * 60 * 1000)
      // setTimeout(reloadApps, 10 * 60 * 1000)
      // setTimeout(reloadNotifications, 10 * 60 * 1000)

      function reloadPurchases() {
        if (purchases != null) {
          purchases.loadURL("https://play.google.com/apps/publish/?account=6337185423976596164#OrderManagementPlace")
        }

        if (financial != null) {
          financial.loadURL("https://pay.google.com/payments/u/0/home?bcn=794839672874#subscriptionsAndServices")
        }

        setTimeout(reloadPurchases, 3 * 60 * 1000)
      }

      function reloadApps() {
        if (talonReviews != null) {
          talonReviews.loadURL("https://play.google.com/apps/publish/?account=6337185423976596164#ReviewsPlace:p=com.klinker.android.twitter_l")
        }

        if (talonFirebase != null) {
          talonFirebase.loadURL("https://console.firebase.google.com/u/0/project/talon-twitter/overview")
        }

        if (pulseReviews != null) {
          pulseReviews.loadURL("https://play.google.com/apps/publish/?account=6337185423976596164#ReviewsPlace:p=xyz.klinker.messenger")
        }

        if (pulseFirebase != null) {
          pulseFirebase.loadURL("https://console.firebase.google.com/u/0/project/messenger-42616/overview")
        }

        if (pulseAdmin != null) {
          pulseAdmin.loadURL("https://messenger.klinkerapps.com/admin.html")
        }

        setTimeout(reloadApps, 10 * 60 * 1000)
      }

      function reloadNotifications() {
        if (twitter != null) {
          twitter.loadURL("https://twitter.com/search?f=tweets&q=%40KlinkerApps%20OR%20%40TalonAndroid%20OR%20%40lukeklinker")
        }

        if (github != null) {
          github.loadURL("https://github.com/notifications")
        }

        if (slack != null) {
          slack.loadURL("https://klinkerapps.slack.com")
        }

        setTimeout(reloadNotifications, 10 * 60 * 1000)
      }

      function tryCatch(code) {
        return "try { " + code + " } catch (err) { }"
      }

      function definePlayStorePrefixItem() {
        return `var item = document.querySelectorAll('[role="status"]')[0].className; item = item.substring(0, item.indexOf("-"));`
      }
    }

    module.exports.initPage = initPage
}());
