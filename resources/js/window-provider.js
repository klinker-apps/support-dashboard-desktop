(function() {
    let mainWindow = null
    
    var setWindow = function(w) {
        mainWindow = w
    }

    var getWindow = function() {
        return mainWindow
    }

    module.exports.getWindow = getWindow;
    module.exports.setWindow = setWindow;
}());
