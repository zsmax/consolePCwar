import { settings } from "./utils/settings";
import { printMessage } from "./printMessage";
import { random } from "./utils/random";

const system = 'system',
    pc = 'pc',
    player = 'player';

const turns = {
    pc: 0,
    player: 0
};

export function startGame(params) {

    const gameField = document.querySelector('.gameField'),
        input = document.querySelector('input'),
        actionButton = document.querySelector('.actionButton');

    // const 
    // listener for button 

    // on enter
    document.addEventListener('keyup', function (event) {

        if (input.value && event.keyCode === 13) {
            event.preventDefault();
            actionButton.click();
        }
    });
    order();
    pcGame();
}

function order(params) {

    const text = ' goes first';

    let pcTurn = bones(),
        playerTurn = bones();

    turns.pc = 0;
    turns.player = 0;

    if (pcTurn != playerTurn) {

        let winner;

        if (pcTurn > playerTurn) {
            winner = pc;

        } else if (pcTurn < playerTurn) {
            winner = player;
        }
        turns[winner] = 1;
        printMessage(system, winner + text);

    } else {
        order();
    }

}

function pcGame() {
    let minPriority = 1,
        maxPriority = Object.keys(settings.pc.priority).length;

    if (settings.pc.health > (settings.pc.health - (settings.lowKick.min - settings.lowKick.max) / 2)) {
        // TODO: kicks, not heal

        // random(minPriority, maxPriority - 1);
        console.log("TCL: pcGame -> random(minPriority, maxPriority - 1)", random(minPriority, maxPriority - 1));
    }

    else if (settings.pc.health <= 35) {
        //  TODO: chouse kicks or heal

        if (settings.player.health <= (settings.lowKick.min + settings.lowKick.max) / 2) {
            // TODO: low kick punish

        } else {
            // TODO: 1 kick or 2 heals
        }

    } else {
        // TODO: chouse  kicks or heal

    }




}
function playerGame() {

}


function bones() {

    let range = {
        min: 1,
        max: 2
    };

    return random(range.min, range.max);
}