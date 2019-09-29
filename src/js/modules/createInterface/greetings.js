import { printMessage } from "../../game/printMessage";

export function greetings(params) {
    let greetings = 'Вам предстоит битва с злобным компьютером. ' +
        'Вы можете выбрать "УДАР" со средним диаппазоном урона (18 - 25 HP). ' +
        'Или "СИЛЬНЫЙ УДАР" с большим диаппазоном урона (10 - 35 HP). ' +
        'Или вы можете выбрать "АПТЕЧКА" для лечения себя в диаппазоне (18 - 25HP) ' +
        'Так начнём же.';
    printMessage('system', greetings);
}