var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import '/scripts/react/umd/react.development.js';
import currencyValues from "./currencies.js";

var _React = React,
    useState = _React.useState;


function Conversor(props) {

    var displayValue = document.querySelector('#displayValue');

    var _useState = useState({
        value: 'aoaValues',
        title: 'Kwanza (Angola)'
    }),
        _useState2 = _slicedToArray(_useState, 2),
        moeda01 = _useState2[0],
        setMoeda01 = _useState2[1];

    var _useState3 = useState({
        value: 'AOA',
        title: 'Kwanza (Angola)'
    }),
        _useState4 = _slicedToArray(_useState3, 2),
        moeda02 = _useState4[0],
        setMoeda02 = _useState4[1];

    function currencyExchange() {
        var currencies = currencyValues();
        var exchangeTo = moeda01;
        var exchangeFrom = moeda02;
        var valueToExchange = parseFloat(document.querySelector('#valor-converter').value);

        var finalValue = exchangeFrom.title === exchangeTo.title ? valueToExchange : (currencies[exchangeTo.value][exchangeFrom.value] * valueToExchange).toFixed(2);

        return finalValue;
    }

    var handleExchange = function handleExchange() {
        var value = currencyExchange();
        display(value, displayValue);
    };

    return React.createElement(
        'div',
        { id: 'conversor' },
        'Converter de',
        React.createElement(
            'select',
            { className: 'currencySelection', onChange: function onChange() {
                    setMoeda01({
                        value: event.target.value,
                        title: event.target.selectedOptions[0].innerText
                    });
                } },
            React.createElement(
                'option',
                { value: 'aoaValues' },
                'Kwanza (Angola)'
            ),
            React.createElement(
                'option',
                { value: 'usdValues' },
                'Dollar (US)'
            ),
            React.createElement(
                'option',
                { value: 'eurValues' },
                'Euro (Europe)'
            ),
            React.createElement(
                'option',
                { value: 'gblValues' },
                'Pounds (UK)'
            ),
            React.createElement(
                'option',
                { value: 'brlValues' },
                'Real (Brasil)'
            )
        ),
        'para',
        React.createElement(
            'select',
            { className: 'currencySelection', onChange: function onChange() {
                    setMoeda02({
                        value: event.target.value,
                        title: event.target.selectedOptions[0].innerText
                    });
                } },
            React.createElement(
                'option',
                { value: 'AOA' },
                'Kwanza (Angola)'
            ),
            React.createElement(
                'option',
                { value: 'USD' },
                'Dollar (US)'
            ),
            React.createElement(
                'option',
                { value: 'EUR' },
                'Euro (Europe)'
            ),
            React.createElement(
                'option',
                { value: 'GBL' },
                'Pounds (UK)'
            ),
            React.createElement(
                'option',
                { value: 'BRL' },
                'Real (Brasil)'
            )
        ),
        React.createElement(
            'h4',
            null,
            moeda01.title,
            ' Para ',
            moeda02.title,
            ' '
        ),
        React.createElement('input', { type: 'text', placeholder: 'Insira um valor', id: 'valor-converter' }),
        React.createElement('br', null),
        React.createElement(
            'button',
            { id: 'button', onClick: handleExchange },
            'Converter'
        ),
        React.createElement('div', { id: 'displayValue' })
    );
}

function display(value, element) {
    element.innerHTML = '<strong> ' + value + '</strong>';
}

export default Conversor;