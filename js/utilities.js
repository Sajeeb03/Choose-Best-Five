function getPlayerNames(elementId) {
    const playerNameFields = document.getElementById(elementId);
    const playerName = playerNameFields.innerText;
    return playerName;
}

function listOfSelectedFive(elementId) {
    const playerName = getPlayerNames(elementId);
    const listField = document.getElementById('list-items');

    const listItemNumbers = document.querySelectorAll('li');
    const numbers = listItemNumbers.length;

    if (numbers < 5) {
        let listItem = document.createElement('li');
        listItem.innerText = playerName;
        listField.appendChild(listItem);
    }
    else {
        alert('You can not buy more than 5');
        return;
    }


}

function makeButtonDisabled(elementId) {
    const buttonField = document.getElementById(elementId);
    buttonField.setAttribute('disabled', true);
}

function getValueFromInput(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);

    if (isNaN(inputFieldValue) === true) {
        alert('Enter a number');
        inputField.value = '';
        return;
    }
    else {
        return inputFieldValue;
    }

}

function getInnerTextFromTexts(elementId) {
    const textField = document.getElementById(elementId);
    const textFieldString = textField.innerText;
    const textFieldValue = parseInt(textFieldString);
    return textFieldValue;
}

function setTextToOutput(elementId, value) {
    const outputField = document.getElementById(elementId);
    outputField.innerText = value;
}

function notAnumberChecker(elementId) {

}