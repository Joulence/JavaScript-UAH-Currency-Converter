// Currency rates API
const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

// Getting select element and inputs
let currencyMenu = document.getElementById('currencyMenu');
let currencyInput = document.getElementById('currencyInput');
let uahInput = document.getElementById('uahInput');

fetch(url)
    .then(res => { return res.json(); })
    .then(data => {
        for (let i = 0; i < data.length; i++) {           
            let opt = document.createElement('option');

            opt.value = data[i].cc;
            opt.innerHTML = data[i].cc;
            currencyMenu.appendChild(opt);

            let currencyFlag = currencyMenu.value;

            if (currencyFlag == data[i].cc) {
                uahInput.value = currencyInput.value * data[i].rate;
            }

            currencyMenu.addEventListener('change', () => {
                currencyFlag = currencyMenu.value;
                if (currencyFlag == data[i].cc) {
                    uahInput.value = currencyInput.value * data[i].rate;
                }
            });

            currencyInput.addEventListener('input', () => {
                if (currencyInput.value < 0) {
                    currencyInput.value = 0;
                }
                if (currencyFlag == data[i].cc) {
                    uahInput.value = currencyInput.value * data[i].rate;
                }
            });

            uahInput.addEventListener('input', () => {
                if (uahInput.value < 0) {
                    uahInput.value = 0;
                }
                if (currencyFlag == data[i].cc) {
                    currencyInput.value = uahInput.value / data[i].rate;
                }                
            });
        }
    })
    .catch(err => { console.errror(err) })