import { pc, player, system, startGame } from "../startGame";
import { random } from "./random";
import { settings } from "./settings";
import { printMessage } from "../printMessage";

// TODO:
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
            settings[self].health += attackPower;
        }
        if (enemy) {
            settings[enemy].health -= attackPower;
        }

        let printChouse = `${attack} : ${attackPower} points`;
        printMessage(who, printChouse);
        if (who === player) {
            settings.start = true;
            startGame();
        }

    }

    console.log('pc health: ', settings.pc.health);
    console.log('player health: ', settings.player.health);
}
// [pc, player] = [player, pc]