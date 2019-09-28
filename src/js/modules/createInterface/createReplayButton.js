import { replayButtonStyle } from "./utils/replayButtonStyle";
import { appCheck } from "./appChecking";

// creating replay button

export function createReplayButton() {

    const app = document.querySelector('#app'),
        replayButton = document.createElement('button');

    replayButton.classList.add('replayButton');
    replayButton.setAttribute('style', replayButtonStyle);
    replayButton.textContent = `REPLAY?`;
    replayButton.addEventListener('click', () => {
        location.reload();
    });
    app.appendChild(replayButton);

}