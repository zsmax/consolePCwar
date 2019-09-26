import { createInterface } from "./modules/createInterface/createInterface";
import { startButtonCreate } from "./modules/startButtonCreate";
import { startGame } from "./game/startGame";
import { printMessage } from "./game/printMessage";
import { greetings } from "./game/greetings";


// // creation Start Button
// IMPORTANT:
// DO_NOT_REMOVE:
// startButtonCreate();

// const startButton = document.querySelector('.startButton');
// // interface creation 
// startButton.addEventListener('click', createInterface);
// startButton.addEventListener('click', function () {
//     startButton.style.display = 'none';
// });
// REMOVE: only comments

createInterface();
// game intro
greetings();
startGame();





