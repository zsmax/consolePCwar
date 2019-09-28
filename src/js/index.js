import { createInterface } from "./modules/createInterface/createInterface";
import { startButtonCreate } from "./modules/startButtonCreate";


// creation Start Button
startButtonCreate();

const startButton = document.querySelector('.startButton');

// event listeners on Start button
startButton.addEventListener('click', createInterface);
startButton.addEventListener('click', function () {
    startButton.style.display = 'none';
});
