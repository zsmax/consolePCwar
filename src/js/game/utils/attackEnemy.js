import { pc, player, system, startGame } from "../startGame";
import { random } from "./random";
import { settings } from "./settings";
import { printMessage } from "../printMessage";

export function attackEnemy(who, attack) {

    let attackPower = random(settings.attacks[attack].min, settings.attacks[attack].max);

    if (who !== pc && who !== player) {

        console.error('attackEnemy().error');

    } else {

        let enemy,
            self;

        // pc part 
        if (who === pc) {
            if (attack !== 'heal') {
                enemy = player;
            } else {
                self = who;
            }

            // player part
        } else {
            if (attack !== 'heal') {
                enemy = pc;
            } else {
                self = who;
            }
        }

        if (self) {

            if (settings[self].health + attackPower > 100) {
                settings[self].health = 100;
            } else {
                settings[self].health += attackPower;
            };
        }
        if (enemy) {
            settings[enemy].health -= attackPower;
        }

        // beauty output
        let printAttack;
        switch (attack) {
            case 'lowKick':
                printAttack = 'low kick';
                break;
            case 'highKick':
                printAttack = "high kick";
                break;
            case 'heal':
                printAttack = 'heal';
                break;
            default:
                console.error('attack');
                break;
        }

        printAttack = printAttack.toUpperCase();
        let printChouse = `${printAttack} : ${attackPower} points`;

        printMessage(who, printChouse);
        if (who === player) {
            settings.start = true;
            startGame();
        }
    }
}