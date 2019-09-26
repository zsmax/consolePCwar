import { settings } from "./utils/settings";
import { printMessage } from "./printMessage";
import { random } from "./utils/random";
import { playerGame } from "./playerGame";
import { pcGame } from "./pcGame";


export const system = 'system';
export const pc = 'pc';
export const player = 'player';

const turns = {
    pc: 0,
    player: 0
};


export function startGame(params) {

    // console.warn('startGame');

    if (settings.start) {
        order();
    }

    if (turns.pc) {
        pcGame();
    } else if (turns.player) {
        playerGame();
    }

    if (settings.start) {
        requestAnimationFrame(startGame);
    }
}

function order(params) {

    const text = ' goes';

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


        let throwBones = 'THROW BONES:';
        let getBones = `${pc} got ${pcTurn}, you got ${playerTurn}`;

        printMessage(system, throwBones);
        printMessage(system, getBones);
        printMessage(system, winner + text);

    } else {
        order();
    }

}

function bones() {

    let range = {
        min: 1,
        max: 6
    };
    return random(range.min, range.max);
}


// function playGame() {

//     if (settings.start) {

//         startGame();

//     }
// }
