const printToDom = (selectedDiv, textToPrint) => {
    selectedDiv.innerHTML = textToPrint;
}

const toCelsius = (input) => {
    return newCelsius = (input * (9/5)) + 32;
}

const toFahrenheit = (input) => {
    return newFahrenheit = (input - 32) * (5/9);
}


const temperatureConverter = () => {
    const tempInput = document.getElementById("tempInput").value;
    const outputDiv = document.getElementById("tempOutput");
    let domString = ``
    if (document.getElementById("celsiusButton").checked === true) {
        const newCelsius = toCelsius(tempInput);
        if (newCelsius > 32) {
            domString = `<p class="red"> ${newCelsius} C</p>`;
        } else if (newCelsius <= 32 && newCelsius >= 0) {
            domString = `<p class="green"> ${newCelsius} C</p>`;
        } else {
            domString = `<p class="blue"> ${newCelsius} C</p>`;
        }
        printToDom(outputDiv, domString);
    } else {
        const newFahrenheit = toFahrenheit(tempInput);
        if (newFahrenheit > 90) {
            domString = `<p class="red"> ${newFahrenheit} F</p>`;
        } else if (newFahrenheit <= 90 && newFahrenheit >= 32) {
            domString = `<p class="green"> ${newFahrenheit} F</p>`;
        } else {
            domString = `<p class="blue"> ${newFahrenheit} F</p>`;
        }
        printToDom(outputDiv, domString);
    };
}

const clear = () => {
    document.getElementById("tempInput").value = ``;
    document.getElementById("celsiusButton").checked = false;
    document.getElementById("fahrenheitButton").checked = false;
    document.getElementById("tempOutput").innerHTML = ``;
}

const buttonEvents = () => {
    document.getElementById("convertButton").addEventListener("click", temperatureConverter);
    document.getElementById("clearButton").addEventListener("click", clear);
    document.addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            temperatureConverter();
        };
    });
}

const init = () => {
    buttonEvents();
}

init();