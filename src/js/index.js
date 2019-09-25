import { createInterface } from "./modules/createInterface/createInterface";
import { startButtonCreate } from "./modules/startButtonCreate";
import { startGame } from "./game/startGame";
import { printMessage } from "./game/printMessage";
import { greetings } from "./game/greetings";

// // REMOVE: the comments
// // creation Start Button
// startButtonCreate();

// const startButton = document.querySelector('.startButton');
// // interface creation 
// startButton.addEventListener('click', createInterface);
// startButton.addEventListener('click', function () {
//     startButton.style.display = 'none';
// });
// REMOVE: end comments

createInterface();
// game intro
greetings();
startGame();





