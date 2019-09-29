import { settings } from "./utils/settings";
import { printMessage } from "./printMessage";
import { system, player } from "./startGame";
import { attackEnemy } from "./utils/attackEnemy";


export function playerGame() {

    console.warn('playerGame');
    settings.start = false;

    const input = document.querySelector('input'),
        actionButton = document.querySelector('.actionButton');

    input.focus();
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
            case 'удар':
                attack = 'lowKick';
                break;
            case 'сильный удар':
                attack = 'highKick';
                break;
            case 'аптечка':
                attack = 'heal';
                break;
            default:
                break;
        }

        if (settings.player.health == '100' && attack === 'heal') {

            let wrongComand = `Вам пока не нужна аптечка - попробуйте удары.`;
            printMessage(system, wrongComand);

        } else if (settings.attacks[attack]) {
            attackEnemy(player, attack);
        } else {
            let wrongComand = `Варианты атак:
            УДАР | СИЛЬНЫЙ УДАР | АПТЕЧКА`;
            printMessage(system, wrongComand);
        }
    }
}