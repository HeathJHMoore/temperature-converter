console.log("yo whats up");

const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;
}


const determineConverter = () => {
    let tempInput = document.getElementById("tempInput").value;
    let buttonInput = ''
    if (document.getElementById("celsiusButton").checked === true) {
        buttonInput = 'C';
    } else {
        buttonInput = 'F';
    }
    console.log(tempInput, buttonInput);
    printToDom('tempOutput', tempInput);
}

const buttonEvents = () => {
    document.getElementById("convertButton").addEventListener("click", determineConverter);
}

const init = () => {
    buttonEvents();
}

init();