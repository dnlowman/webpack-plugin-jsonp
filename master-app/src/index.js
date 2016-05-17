console.log('Master App!');

console.log('[Loading Plugins...]');

loadAllThePlugins('test', function() {
    console.log('Loaded!...');
});

function loadAllThePlugins(name, callback) {
    window[name] = function(exports) {
        delete window[name];
        head.removeChild(script);
        callback(null, exports);
    };

    // start loading via jsonp
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = "/plugins/" + name + "/bundle.js";
    head.appendChild(script);
}
