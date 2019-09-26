import { pc, player } from "../../game/startGame";

export function createLoseWindow(winner) {

    const loseWindow = document.createElement('div'),
        app = document.querySelector('#app'),
        gameArea = document.querySelector('.gameArea');

    gameArea.style.filter = 'blur(1px)';


    if (winner === pc) {
        let backgroundImage = `url('./assets/img/you_lose.png')`;
        loseWindowStyle(backgroundImage);
    } else if (winner === player) {
        let backgroundImage = `url('./assets/img/you_win.png')`;
        loseWindowStyle(backgroundImage);
    } else {
        console.error('createLoseWindow -> winner?');
    }


    function loseWindowStyle(backgroundImage) {
        app.style.position = 'relative';
        loseWindow.classList.add('.loseWindow');
        loseWindow.style.height = `${gameArea.getBoundingClientRect().height}px`;
        let style = 'position: absolute;' +
            'z-index: 200;' +
            `width: ${gameArea.getBoundingClientRect().width}px;` +
            `height: ${gameArea.getBoundingClientRect().height}px;` +
            'top: 50%;' +
            'left: 50%;' +
            'transform: translateX(-50%) translateY(-50%);' +
            `background: transparent ${backgroundImage} center/contain no-repeat;`;
        loseWindow.setAttribute('style', style);
        app.appendChild(loseWindow);
    }
}