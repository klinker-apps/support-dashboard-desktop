var current = null;

var openPage = (pageName = "gmail") => {
  if (pageName == current) {
    return;
  }

  current = pageName;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "pages/" + pageName + ".html", true);
  xhr.onreadystatechange = function() {
    document.getElementById("content").innerHTML = this.responseText;
    initPage();
  };
  xhr.send();
};

// default to email page.
openPage("gmail");

// this defines the icons on the left and their order
let navString = "";
let navLinks = [
  "gmail",
  "slack",
  // "pulse",
  "talon",
  // "purchase",
  "github",
  "twitter",
  // "cloud-consoles",
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

var tryCatch = (code) => {
  return "try { " + code + " } catch (err) { }"
}

var definePlayStorePrefixItem = () => {
  return `var item = document.querySelectorAll('[role="status"]')[0].className; item = item.substring(0, item.indexOf("-"));`
}

var initPage = () => {
  var email = document.getElementById("email");

  var pulseReviews = document.getElementById("pulse-reviews");
  var pulseFirebase = document.getElementById("pulse-firebase");
  var pulseAdmin = document.getElementById("pulse-admin");

  var talonReviews = document.getElementById("talon-reviews");
  var talonFirebase = document.getElementById("talon-firebase");

  var purchases = document.getElementById("purchases");
  var financial = document.getElementById("financial");

  var slack = document.getElementById("slack");
  var github = document.getElementById("github-notifications");
  var twitter = document.getElementById("twitter-search");
  var googlePlus = document.getElementById("google-plus");

  var templatesButton = document.getElementById("templates-button");
  var templatesContainer = document.getElementById("templates-overlay");
  var templatesWebView = document.getElementById("templates-webview");

  if (templatesButton && templatesContainer && templatesWebView) {
    var justClicked = false;
    templatesButton.addEventListener("click", function() {
      var currentState = templatesContainer.style.display;
      justClicked = true;
      if (currentState === "block") {
        templatesContainer.style.display = "none";
      } else {
        templatesContainer.style.display = "block";
        templatesWebView.focus();
      }
    });

    templatesWebView.addEventListener("blur", function() {
      var currentState = templatesContainer.style.display;
      if (!justClicked && currentState !== "none") {
        templatesContainer.style.display = "none";
      }

      justClicked = false;
    });

    templatesWebView.addEventListener("dom-ready", function() {
      templatesWebView.executeJavaScript(
        tryCatch(
          `document.getElementsByClassName('Header')[0].style.display = "none";`
        )
      );
      templatesWebView.executeJavaScript(
        tryCatch(
          `document.getElementsByClassName('footer')[0].style.display = "none";`
        )
      );
      templatesWebView.executeJavaScript(
        tryCatch(
          `document.getElementsByClassName('pagehead')[0].style.display = "none";`
        )
      );
    });
  }

  let openNewWindow = [twitter, github, slack, googlePlus, email];
  for (let i = 0; i < openNewWindow.length; i++) {
    if (openNewWindow[i] != null) {
      openNewWindow[i].addEventListener("new-window", event => {
        try {
          require("electron").shell.openExternal(event.url);
        } catch (error) {
          console.log(error);
        }
      });
    }
  }

  let reviews = [pulseReviews, talonReviews];
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i] != null) {
      let review = reviews[i];
      review.addEventListener("focus", function() {
        // show app bar
        review.executeJavaScript(
          tryCatch(
            definePlayStorePrefixItem() +
              `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "flex";`
          )
        );
        review.executeJavaScript(
          tryCatch(
            definePlayStorePrefixItem() +
              `document.getElementsByClassName(item + '-j-v')[2].style.display = "block";`
          )
        );
      });

      review.addEventListener("dom-ready", function() {
        setTimeout(function() {
          review.executeJavaScript(
            tryCatch(
              definePlayStorePrefixItem() +
                `document.getElementsByClassName(item + '-J-e')[0].style.display = "none";`
            )
          );
          review.executeJavaScript(
            tryCatch(
              definePlayStorePrefixItem() +
                `document.getElementsByClassName(item + '-J-f')[0].style.display = "none";`
            )
          );

          // search/filtering section
          review.executeJavaScript(
            tryCatch(
              definePlayStorePrefixItem() +
                `document.querySelectorAll('[role="article"]')[2].style.display = "none";`
            )
          );
          review.executeJavaScript(
            tryCatch(
              definePlayStorePrefixItem() +
                `document.getElementsByClassName(item + '-p-c')[0].style.display = "none";`
            )
          );
          review.executeJavaScript(
            tryCatch(
              definePlayStorePrefixItem() +
                `document.getElementsByClassName(item + '-j-u')[2].style.display = "none";`
            )
          );

          // close the drawer
          review.executeJavaScript(
            tryCatch(
              definePlayStorePrefixItem() +
                `document.getElementsByClassName(item + '-f-m')[0].click();`
            )
          );

          // app bar
          review.executeJavaScript(
            tryCatch(
              definePlayStorePrefixItem() +
                `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "none";`
            )
          );
          review.executeJavaScript(
            tryCatch(
              definePlayStorePrefixItem() +
                `document.getElementsByClassName(item + '-j-v')[2].style.display = "none";`
            )
          );
        }, 7000);
      });
    }
  }

  if (purchases != null) {
    purchases.addEventListener("dom-ready", function() {
      setTimeout(function() {
        // close the drawer
        purchases.executeJavaScript(
          tryCatch(
            definePlayStorePrefixItem() +
              `document.getElementsByClassName(item + '-f-m')[0].click();`
          )
        );

        // app bar
        purchases.executeJavaScript(
          tryCatch(
            definePlayStorePrefixItem() +
              `document.getElementsByClassName(item + '-G-h ' + item + '-s-b ' + item + '-j-v')[0].style.display = "none";`
          )
        );
        purchases.executeJavaScript(
          tryCatch(
            definePlayStorePrefixItem() +
              `document.getElementsByClassName(item + '-j-v')[2].style.display = "none";`
          )
        );
      }, 5000);
    });
  }

  if (financial != null) {
    financial.addEventListener("dom-ready", function() {
      setTimeout(function() {
        financial.executeJavaScript(
          tryCatch(
            `document.getElementsByClassName('AnonymousHeader__fixed-container___2WZuN')[0].style.display = "none";`
          )
        );
        financial.executeJavaScript(
          tryCatch(
            `document.getElementsByClassName('StaticDashboardHeader__container___23Gpz')[0].style.display = "none";`
          )
        );
        financial.executeJavaScript(
          tryCatch(
            `document.getElementsByClassName('StaticChartHeader__container___9lODt')[0].style.display = "none";`
          )
        );
        financial.executeJavaScript(
          tryCatch(
            `document.getElementsByClassName('CoreLayout__container___31Gy2')[0].style.paddingTop = "0px";`
          )
        );
        financial.executeJavaScript(
          tryCatch(
            `document.getElementsByClassName('ShareView__chart-container___r0zdr')[0].style.marginTop = "0px";`
          )
        );
      }, 1500);
    });
  }

  if (pulseAdmin != null) {
    pulseAdmin.addEventListener("dom-ready", function() {
      setTimeout(function() {
        pulseAdmin.executeJavaScript(
          tryCatch(
            `document.getElementsByClassName('mdl-layout__header is-casting-shadow')[0].style.display = "none";`
          )
        );
        pulseAdmin.executeJavaScript(
          tryCatch(
            `document.getElementById('admin-list').style.paddingTop = "0px";`
          )
        );
      }, 3000);
    });
  }

  if (twitter != null) {
    twitter.addEventListener("dom-ready", function() {
      setTimeout(function() {
        // twitter.executeJavaScript(tryCatch(`document.getElementsByClassName('Grid-cell u-size1of3 u-lg-size1of4')[0].style.display = "none";`))
        // twitter.executeJavaScript(tryCatch(`document.getElementsByClassName('SearchNavigation')[0].style.display = "none";`))
        // twitter.executeJavaScript(tryCatch(`document.getElementsByClassName('global-nav')[0].style.display = "none";`))
        // twitter.executeJavaScript(tryCatch(`document.getElementById('page-container').style.paddingTop = "0px";`))
      }, 3000);
    });
  }
};
