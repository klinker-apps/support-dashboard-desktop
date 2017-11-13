// This is injecting this code into the DOM that gets loaded in the WebView.
// It allows us to respond to Electron's WebView communications

const { ipcRenderer }  = require('electron')

window.ItWorked = true

const { SpellCheckHandler, ContextMenuListener, ContextMenuBuilder } = require('electron-spellchecker')

window.spellCheckHandler = new SpellCheckHandler()
window.spellCheckHandler.attachToInput()
window.spellCheckHandler.switchLanguage('en-US')

window.contextMenuBuilder = new ContextMenuBuilder(window.spellCheckHandler, null, true)
window.contextMenuListener = new ContextMenuListener((info) => { window.contextMenuBuilder.showPopupMenu(info) })
