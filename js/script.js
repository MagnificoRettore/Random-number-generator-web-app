let rollBtn = document.getElementById("start_rolling");
rollBtn.addEventListener('click', handleClick);

function handleClick(){
    let numberOfDices = parseInt(document.getElementById("input_how_many").value);
    let typeOfDice = document.getElementById("type_of_dice").value;
    let diceResult = Array(numberOfDices);

    for (dice = 0; dice < numberOfDices; dice++){
        diceResult[dice] = Math.floor(Math.random()*typeOfDice);
    }
    
    console.log(`total dices: ${numberOfDices}, type: D${typeOfDice}`);
    for (dice = 0; dice < numberOfDices; dice++){
        console.log(`dice #${dice}, result: ${diceResult[dice]}`);

    };
}

