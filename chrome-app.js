/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */

var screenWidth = screen.availWidth;
var screenHeight = screen.availHeight;
var width = 1100;
var height = 700;

var windowOptions = {
  id: "mainWindowID",
  bounds: {
    width: width,
    height: height,
    left: Math.round((screenWidth - width) / 2),
    top: Math.round((screenHeight - height) / 2)
  },
  frame: {
    type: "chrome"
  }
};

var windows = {};
var lastNotificationTime = new Date().getTime();

chrome.app.runtime.onLaunched.addListener(function() {
  var win = window;

  var mainWindow = chrome.app.window.create(
    "index.html",
    windowOptions,
    function(window) {
      window.contentWindow.onload = function() {
        // Retrieve the webview element
        var webview = window.contentWindow.document.querySelector("#email");

        webview.addEventListener("newwindow", function(e) {
          // open the link in a new chrome tab
          e.preventDefault();
          win.open(e.targetUrl);
        });

        webview.addEventListener("dialog", function(e) {
          // automatically accept the dialog
          e.preventDefault();
          e.dialog.ok("accepted");
        });
      };
    }
  );
});
