import '/scripts/react/umd/react.development.js';
import currencyValues from "./currencies.js";

const { useState } = React

function Conversor(props) {

    const displayValue = document.querySelector('#displayValue')

    const [moeda01, setMoeda01] = useState({
        value: 'aoaValues',
        title: 'Kwanza (Angola)'
    })
    const [moeda02, setMoeda02] = useState({
        value: 'AOA',
        title: 'Kwanza (Angola)'
    })

    function currencyExchange() {
        const currencies = currencyValues()
        const exchangeTo = moeda01
        const exchangeFrom = moeda02
        const valueToExchange = parseFloat(document.querySelector('#valor-converter').value)

        const finalValue = exchangeFrom.title === exchangeTo.title ?
            valueToExchange :
            (currencies[exchangeTo.value][exchangeFrom.value] * valueToExchange).toFixed(2)

        return finalValue;
    }

    const handleExchange = () => {
        const value = currencyExchange()
        display(value, displayValue)
    }

    return <div id="conversor">
        Converter de
        <select className="currencySelection" onChange={() => {
            setMoeda01({
                value: event.target.value,
                title: event.target.selectedOptions[0].innerText
            });
        }}>
            <option value="aoaValues">Kwanza (Angola)</option>
            <option value="usdValues">Dollar (US)</option>
            <option value="eurValues">Euro (Europe)</option>
            <option value="gblValues">Pounds (UK)</option>
            <option value="brlValues">Real (Brasil)</option>
        </select>
        para
        <select className="currencySelection" onChange={() => {
            setMoeda02({
                value: event.target.value,
                title: event.target.selectedOptions[0].innerText
            });
        }}>
            <option value="AOA">Kwanza (Angola)</option>
            <option value="USD">Dollar (US)</option>
            <option value="EUR">Euro (Europe)</option>
            <option value="GBL">Pounds (UK)</option>
            <option value="BRL">Real (Brasil)</option>
        </select>

        <h4>{moeda01.title} Para {moeda02.title} </h4>
        <input type="text" placeholder="Insira um valor" id="valor-converter" />
        <br />
        <button id="button" onClick={handleExchange}>Converter</button>
        <div id="displayValue"></div>

    </div>

}

function display(value, element) {
    element.innerHTML = `<strong> ${value}</strong>`
}

export default Conversor;