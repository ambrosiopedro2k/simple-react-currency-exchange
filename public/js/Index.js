import '/scripts/react/umd/react.development.js';
import "/scripts/react-dom/umd/react-dom.development.js";
import App from "./App.js";

ReactDOM.render(React.createElement(App, null), document.getElementById('app'), function (e) {
    console.log(e);
});