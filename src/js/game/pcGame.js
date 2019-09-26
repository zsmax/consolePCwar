import { settings } from "./utils/settings";
import { random } from "./utils/random";
import { attackEnemy } from "./utils/attackEnemy";
import { pc } from "./startGame";

export function pcGame() {

    console.warn('pcGame');

    let attacks = Object.keys(settings.attacks),
        minAttack = 1,
        maxAttack = attacks.length,
        attack;

    const randomAttack = () => {
        return random(minAttack, maxAttack) - 1;
    };

    // health is more 75%
    if (settings.pc.health > 75) {

        let attackNum = randomAttack();

        // skipping heal 
        if (attacks[attackNum] === 'heal') {
            while (attacks[attackNum] === 'heal') {
                attackNum = randomAttack();
            }
        }

        attack = attacks[attackNum];

        // health <= 35%
    } else if (settings.pc.health <= 35) {
        console.log('<35');
        let attackNum;

        if (settings.player.health <= (settings.attacks.lowKick.min + settings.attacks.lowKick.max) / 2) {

            // low kick punish
            attackNum = 0;

        } else {
            // 1 kick or 2 heals
            attackNum = random(random(minAttack, maxAttack), maxAttack) - 1;
        }
        attack = attacks[attackNum];

    } else {
        
        let attackNum = randomAttack();
        attack = attacks[attackNum];
    }

    attackEnemy(pc, attack);
}