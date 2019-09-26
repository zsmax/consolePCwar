import { loseWindowStyle } from "./utils/loseWindowStyle";
import { pc, player } from "../../game/startGame";

export function createLoseWindow(winner) {

    const loseWindow = document.createElement('div'),
        app = document.querySelector('#app'),
        gameArea = document.querySelector('.gameArea');

    gameArea.style.filter = 'blur(1px)';


    // const loseOrWin = () => {
        app.style.position = 'relative';
    loseWindow.setAttribute('style', loseWindowStyle);
    loseWindow.style.width = `${gameArea.getBoundingClientRect().width}px`;
    loseWindow.style.height = `${gameArea.getBoundingClientRect().height}px`;
   
    // };

    if (winner === pc) {
        // loseOrWin();
        loseWindow.style.background =
            'url(./assets/img/you_lose.png) center/contain no-repeat;';
        console.log("TCL: createLoseWindow -> loseWindow", loseWindow);
    } else if (winner === player) {
        // loseOrWin();
        loseWindow.style.background =
            `transparent url(./assets/img/you_win.png) center/contain no-repeat;`;
        console.log("TCL: createLoseWindow -> loseWindow", loseWindow);
    } else {
        console.error('createLoseWindow -> winner?');
    }
    app.appendChild(loseWindow);
}