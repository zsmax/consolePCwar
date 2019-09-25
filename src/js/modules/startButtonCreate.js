import { startButtonStyle } from "./createInterface/utils/startButton.Style";
export function startButtonCreate(params) {

    const app = document.querySelector('#app'),
        startButton = document.createElement('button');

    startButton.classList.add('startButton');
    startButton.textContent = "START GAME";

    startButton.setAttribute('style', startButtonStyle);

    app.appendChild(startButton);

}