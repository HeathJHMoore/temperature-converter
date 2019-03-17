const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
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
    if (document.getElementById("celsiusButton").checked === true) {
        const newCelsius = `${toCelsius(tempInput)} C`;
        printToDom("tempOutput", newCelsius);
    } else {
        const newFahrenheit = `${toFahrenheit(tempInput)} F`;
        printToDom("tempOutput", newFahrenheit);
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