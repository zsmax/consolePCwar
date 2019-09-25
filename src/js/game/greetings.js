import { printMessage } from "./printMessage";

export function greetings(params) {
    let greetings = 'Now you will fight. Fate will decide who attacks first. ' +
        ' You can chouse "LOW KICK" for small range attack (18 - 25 HP). ' +
        'Or "HIGH KICK" for big range attack (10 - 35 HP). ' +
        'Or you can chouse "HEEL" to restore heals in range of low kick. ' +
        'So lets start.';
    printMessage('system', greetings);
}