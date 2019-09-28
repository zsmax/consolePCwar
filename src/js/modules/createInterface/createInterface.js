import { healthBar } from './utils/healtBar';
import { gameFieldStyle } from './utils/gameFieldStyle';
import { inputStyle } from './utils/inputStyle';
import { gameAreaStyle } from './utils/gameAreaStyle';
import { actionButtonStyle } from './utils/actionButtonStyle';
import { inputBlockStyle } from './utils/inputBlockStyle';
import { pcPlayerBlockStyle } from './utils/pcPlayerBlockStyle';
import { healthBarIndicator } from './utils/healthBarIndicator';
import { greetings } from './greetings';
import { startGame } from '../../game/startGame';
import { printMessagesStyle } from './utils/printMessagesStyle';

export function createInterface() {
    const app = document.querySelector('#app');

    const gameArea = document.createElement('div'),

        // add top bar
        row = document.createElement('div'),

        // add icons and health
        pcBlock = document.createElement('div'),
        playerBlock = document.createElement('div'),
        pcIcon = document.createElement('div'),
        playerIcon = document.createElement('div'),
        // healthBar
        pcHealth = document.createElement('div'),
        playerHealth = document.createElement('div'),
        pcHealthBar = document.createElement('div'),
        playerHealthBar = document.createElement('div'),
        pcHealthPoint = document.createElement('p'),
        playerHealthPoint = document.createElement('p'),
        // gamefield
        gameField = document.createElement('div'),

        // interaction block
        inputBlock = document.createElement('div'),
        input = document.createElement('input'),
        actionButton = document.createElement('button');



    // initialising gameArea
    app.appendChild(gameArea);
    gameArea.style.marginTop = '20%';

    // add row with health indicator
    row.classList.add('row');

    gameArea.appendChild(row);
    row.style.display = 'flex';
    row.style.width = '100%';

    pcBlock.classList.add('pcBlock');
    // pcBlock style
    pcBlock.setAttribute('style', pcPlayerBlockStyle);

    playerBlock.classList.add('playerBlock');
    // playerBlock style
    playerBlock.setAttribute('style', pcPlayerBlockStyle);

    // pc Icon 
    pcIcon.classList.add('pcIcon', 'icon');
    pcIcon.setAttribute('style', ' width: 100px; height: 100px;');
    pcIcon.style.background = "transparent url('./assets/img/pcIcon.png') center / cover no-repeat";
    // player icon
    playerIcon.classList.add('playerIcon', 'icon');
    playerIcon.setAttribute('style', ' width: 100px; height: 100px; order: 1');
    playerIcon.style.background = "transparent url('./assets/img/playerIcon.png') center / cover no-repeat";

    //  health bar 
    pcHealth.classList.add('pcHealth');
    playerHealth.classList.add('playerHealth');

    pcHealth.setAttribute('style', healthBar);
    playerHealth.setAttribute('style', healthBar);

    pcHealthBar.classList.add('pcHealthBar');
    playerHealthBar.classList.add('playerHealthBar');

    // adding health point
    pcHealthPoint.classList.add('pcHealthPoint');
    playerHealthPoint.classList.add('playerHealthPoint');

    pcHealth.appendChild(pcHealthPoint);
    playerHealth.appendChild(playerHealthPoint);
    pcHealthPoint.innerText = 100;
    playerHealthPoint.innerText = 100;

    gameArea.classList.add('gameArea');
    gameArea.setAttribute('style', gameAreaStyle);

    // appending icons and health bar
    row.appendChild(pcBlock);
    row.appendChild(playerBlock);

    pcBlock.appendChild(pcIcon);
    pcBlock.appendChild(pcHealth);
    playerBlock.appendChild(playerIcon);
    playerBlock.appendChild(playerHealth);

    // activate health bar indicator
    pcHealth.appendChild(pcHealthBar);
    pcHealthBar.setAttribute('style', healthBarIndicator);
    pcHealthBar.style.left = 0;

    playerHealth.appendChild(playerHealthBar);
    playerHealthBar.setAttribute('style', healthBarIndicator);
    playerHealthBar.style.right = 0;

    // gamefield initialising
    gameField.classList.add('gameField');
    gameField.setAttribute('style', gameFieldStyle);
    gameArea.appendChild(gameField);

    // inputBlock 
    inputBlock.classList.add('inputBlock');
    inputBlock.setAttribute('style', inputBlockStyle);

    // input
    input.classList.add('input');
    input.type = 'text';
    input.setAttribute('style', inputStyle.style);
    input.placeholder = inputStyle.placeholder;

    // button
    actionButton.classList.add('actionButton');
    actionButton.textContent = 'Do';
    actionButton.setAttribute('style', actionButtonStyle);


    gameArea.appendChild(inputBlock);
    inputBlock.appendChild(input);
    inputBlock.appendChild(actionButton);

    // addEventListener on enter for player
    document.addEventListener('keyup', function (event) {

        if (input.value && event.keyCode === 13) {
            event.preventDefault();
            actionButton.click();
        }
    });

    // creating styles for output messages
    const systemMessageStyles = document.createElement('style'),
        pcMessageStyles = document.createElement('style'),
        playerMessageStyles = document.createElement('style');

    systemMessageStyles.type = 'text/css';
    pcMessageStyles.type = 'text/css';
    playerMessageStyles.type = 'text/css';

    systemMessageStyles.innerHTML = `.system {${printMessagesStyle.system}}; `;
    pcMessageStyles.innerHTML = `.pc {${printMessagesStyle.pc}};`;
    playerMessageStyles.innerHTML = `.player {${printMessagesStyle.player}};`;


    document.querySelector('body').append(systemMessageStyles,
        pcMessageStyles,
        playerMessageStyles);

    // game start
    greetings();
    startGame();
}