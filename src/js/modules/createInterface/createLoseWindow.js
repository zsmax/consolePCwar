import { pc, player } from "../../game/startGame";
import { settings } from "../../game/utils/settings";
import { createReplayButton } from "./createReplayButton";

export function createLoseWindow(winner) {

    // final image
    const imgPath = {
        lose: `url('./assets/img/you_lose.png')`,
        win: `url('./assets/img/you_win.png')`,
        fatality: `url('./assets/img/fatality.png')`
    };

    const loseWindow = document.createElement('div'),
        app = document.querySelector('#app'),
        gameArea = document.querySelector('.gameArea');

    gameArea.style.filter = 'blur(1px)';


    if (winner === pc) {
        let backgroundImage = imgPath.lose;
        loseWindowStyle(backgroundImage);
    } else if (winner === player) {

        let backgroundImage;

        if (settings.player.health === 100) {
            backgroundImage = imgPath.fatality;
        } else {
            backgroundImage = imgPath.win;
        }
        loseWindowStyle(backgroundImage);
    } else {
        console.error('createLoseWindow -> winner?');
    }

/** Sets image on final window 
 * 
 * @param {String} backgroundImage path to image
 */
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
        createReplayButton();
    }
}