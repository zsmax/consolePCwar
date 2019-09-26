import { settings } from "./utils/settings";
import { printMessage } from "./printMessage";
import { random } from "./utils/random";
import { playerGame } from "./playerGame";
import { pcGame } from "./pcGame";
import { createLoseWindow } from "../modules/createInterface/createLoseWindow";


export const system = 'system';
export const pc = 'pc';
export const player = 'player';

const turns = {
    pc: 0,
    player: 0
};

export function startGame(params) {
    // createLoseWindow();

    const pcHealthPoint = document.querySelector('.pcHealthPoint'),
        playerHealthPoint = document.querySelector('.playerHealthPoint'),
        pcHealthBar = document.querySelector('.pcHealthBar'),
        playerHealthBar = document.querySelector('.playerHealthBar');


    let pcHealth = settings.pc.health,
        playerHealth = settings.player.health;


    // console.warn('startGame');

    if (pcHealth <= 0) {
        pcHealth = 0;
    } else if (playerHealth <= 0) {
        playerHealth = 0;

    }
    pcHealthPoint.textContent = pcHealth;
    pcHealthBar.style.width = pcHealth + '%';
    playerHealthPoint.textContent = playerHealth;
    playerHealthBar.style.width = playerHealth + '%';
    if (!pcHealth) {
        stopFight(player);
    } else if (!playerHealth) {
        stopFight(pc);
    }

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

export function stopFight(winner) {
    const inputAction = document.querySelector('input'),
        actionButton = document.querySelector('.actionButton');
    settings.start = false;
    inputAction.setAttribute('disabled', true);
    inputAction.setAttribute('placeholder', 'END GAME');
    actionButton.setAttribute('disabled', true);
    createLoseWindow(winner);
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