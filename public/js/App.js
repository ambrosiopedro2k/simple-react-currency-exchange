import '/scripts/react/umd/react.development.js';
import Conversor from "./Conversor.js";

function App() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h2",
            null,
            "Conversor de Moedas "
        ),
        React.createElement("hr", null),
        React.createElement(Conversor, null)
    );
}

export default App;