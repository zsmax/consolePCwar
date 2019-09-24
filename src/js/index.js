const app = document.querySelector('#app'),

    gameArea = document.createElement('div'),
    pcIcon = document.createElement('div'),
    playerIcon = document.createElement('div'),
    gameField = document.createElement('div');


gameArea.classList.add('gameArea');
gameArea.setAttribute('style', 'margin: 0 auto; background: #303030; width: 500px; height: 500px; display: flex');
app.appendChild(gameArea);


pcIcon.classList.add('pcIcon', 'icon');
pcIcon.setAttribute('style', "background: transparent url('./assets/img/pcIcon.png') center / cover no-repeat; width: 100px; height: 100px; margin: 10px 5px;");

playerIcon.classList.add('playerIcon', 'icon');
playerIcon.setAttribute('style', "background: rgba(255,255,255, 0.2) url('./assets/img/playerIcon.png') center / cover no-repeat; width: 100px; height: 100px; margin: 10px 5px;");

gameField.classList.add('gameField');
gameField.setAttribute('style', 'flex-grow: 1');

gameArea.appendChild(pcIcon);
gameArea.appendChild(gameField);
gameArea.appendChild(playerIcon);

const icons = document.querySelectorAll('.icon');

// icons.forEach(icon => {
//     icon.style.width = '25%';
//     icon.style.height = '100px';
// });
