import { settings } from "./utils/settings";

export function playerGame() {

    console.warn('playerGame');

    settings.start = false;

    const gameField = document.querySelector('.gameField'),
        input = document.querySelector('input'),
        actionButton = document.querySelector('.actionButton');

    // const 
    // listener for button 

    // on enter
    document.addEventListener('keyup', function (event) {

        if (input.value && event.keyCode === 13) {
            event.preventDefault();
            actionButton.click();
        }
    });
}
