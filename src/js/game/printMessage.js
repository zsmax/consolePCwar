/**
 * Styles for messaging in chat
 * printing message in game field
 * @param {String} who add this class for message
 * @param {String} text message
 */
export function printMessage(who, text) {

    const classNames = {
        system: 'system',
        pc: 'pc',
        player: 'player'
    };

    const gameField = document.querySelector('.gameField');
    let message = document.createElement('div');
    message.textContent = text;

    if (classNames.hasOwnProperty(who)) {
        message.classList.add(classNames[who]);
        gameField.appendChild(message);
        gameField.scrollTop = gameField.scrollHeight;
    } else {
        console.warn('error');
    }
}
