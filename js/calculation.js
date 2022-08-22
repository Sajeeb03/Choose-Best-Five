document.getElementById('btn-calculate').addEventListener('click', function () {

    const listItemNumbers = document.querySelectorAll('li');
    const numbers = listItemNumbers.length;

    const costPerPlayer = getValueFromInput('per-player-input');
    const costForPlayers = costPerPlayer * numbers;

    setTextToOutput('player-expense', costForPlayers);
})