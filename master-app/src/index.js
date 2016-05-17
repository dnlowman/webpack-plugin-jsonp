var React = require('react');
var ReactDOM = require('react-dom');

console.log('Master App!');

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

class MasterApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log('[Mounted, Loading ze Plugins...]');

        loadAllThePlugins('test', function(wat, exports) {
            console.log('Loaded!...');
            this.setState({ component: exports.SomeComponent });
        }.bind(this));
    }

    render() {
        return (
            <div>
                <p>This is le master component...</p>
                {(this.state.component) ? <this.state.component /> : <p>No components loaded...</p>}
            </div>
        );
    }
}

ReactDOM.render(<MasterApp />, document.getElementById('react-container'));
