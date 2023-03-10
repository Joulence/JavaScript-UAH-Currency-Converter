const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

let currencyMenu = document.getElementById('currencyMenu');
let currencyInput = document.getElementById('currencyInput');
let uahInput = document.getElementById('uahInput');

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
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
}

getData();