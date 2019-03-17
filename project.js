console.log("yo whats up");

const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint
}

