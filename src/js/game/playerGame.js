import { settings } from "./utils/settings";
import { printMessage } from "./printMessage";
import { system, player } from "./startGame";
import { attackEnemy } from "./utils/attackEnemy";


export function playerGame() {

    console.warn('playerGame');
    settings.start = false;

    const input = document.querySelector('input'),
        actionButton = document.querySelector('.actionButton');

    // const 
    // listener for button 
    actionButton.addEventListener('click', () => {
        if (input.value) {
            getAttack();
        }
    });



    function getAttack(params) {

        let attack;
        let text = input.value.toLowerCase();
        input.value = '';

        switch (text) {
            case 'low kick':
            case 'lowkick':
            case 'low':
                attack = 'lowKick';
                break;
            case 'high kick':
            case 'high':
            case 'highkick':
                attack = 'highKick';
                break;
            case 'heal':
                attack = 'heal';
                break;
        }

        if (settings.attacks[attack]) {
            attackEnemy(player, attack);
        } else {
            let wrongComand = `low kick | high kick | heal`;
            printMessage(system, wrongComand);
        }
    }
}