import '/scripts/react/umd/react.development.js';
import '/scripts/react-dom/umd/react-dom.development.js';
import App from './App.js';

ReactDOM.render(
        <App />,
    document.getElementById('app'),
    (e) => {
        console.log(e)
    }
)