document.getElementById('btn-calculate').addEventListener('click', function () {

    const listItemNumbers = document.querySelectorAll('li');
    const numbers = listItemNumbers.length;

    const costPerPlayer = getValueFromInput('per-player-input');
    const costForPlayers = costPerPlayer * numbers;

    setTextToOutput('player-expense', costForPlayers);
})

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const managerCost = getValueFromInput('manager-input');
    const coachCost = getValueFromInput('coach-input');
    const costForPlayers = getInnerTextFromTexts('player-expense');

    const totalExpenses = managerCost + coachCost + costForPlayers;
    setTextToOutput('total-expense', totalExpenses);
})