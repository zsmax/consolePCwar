import { startButtonCreate } from "./modules/startButtonCreate";
import { appCheck } from "./modules/createInterface/appChecking";


// creation Start Button
startButtonCreate();

const startButton = document.querySelector('.startButton');

// event listeners on Start button
startButton.addEventListener('click', appCheck);
startButton.addEventListener('click', function () {
    startButton.style.display = 'none';
});
