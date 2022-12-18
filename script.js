let currencyMenu = document.getElementById('currencyMenu');

let currencyInput = document.getElementById('currencyInput');
let uahInput = document.getElementById('uahInput');

let currenciesPrices = {
    'usd': 37.44,
    'eur': 40
}

let currencyFlag = currencyMenu.value;

uahInput.value = currencyInput.value * currenciesPrices.usd;

currencyMenu.addEventListener('change', () => {
    currencyFlag = currencyMenu.value;
    uahInput.value = currencyInput.value * currenciesPrices[currencyFlag];
});

currencyInput.addEventListener('input', () => {
    if (currencyInput.value < 0) {
        currencyInput.value = 0;
    }
    uahInput.value = currencyInput.value * currenciesPrices[currencyFlag];
});

uahInput.addEventListener('input', () => {
    if (uahInput.value < 0) {
        uahInput.value = 0;
    }
    currencyInput.value = uahInput.value / currenciesPrices[currencyFlag];
});