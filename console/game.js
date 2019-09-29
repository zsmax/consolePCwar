// import { random } from "./modules/random";

let greetings = 'Вам предстоит битва с злобным компьютером. ' +
    'Вы можете выбрать "УДАР" со средним диаппазоном урона (18 - 25 HP). ' +
    'Или "СИЛЬНЫЙ УДАР" с большим диаппазоном урона (10 - 35 HP). ' +
    'Или вы можете выбрать "АПТЕЧКА" для лечения себя в диаппазоне (18 - 25HP) ' +
    'Так начнём же.';

const turns = {
    pc: 0,
    player: 0
};

const system = 'system',
    pc = 'pc',
    player = 'player';


// game settings
const settings = {

    start: true,

    pc: {
        health: 100,
    },
    player: {
        health: 100
    },
    // type of attack
    attacks: {
        lowKick: {
            // low kick range
            min: 18,
            max: 25,
        },
        highKick: {
            // high kick range
            min: 10,
            max: 35,
        },
        heal: {
            // healing range
            min: 18,
            max: 25,
        }
    },
};
let readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);


(function game() {
    printMessage(greetings);
    startGame();
})();




function startGame(params) {


    let pcHealth = settings.pc.health,
        playerHealth = settings.player.health;

    if (pcHealth <= 0) {
        pcHealth = 0;
    } else if (playerHealth <= 0) {
        playerHealth = 0;
    }

    printMessage(`Здоровье игрока: ${playerHealth}`, `Здоровье РС: ${pcHealth}`);

    if (!pcHealth) {
        stopFight(player);
    } else if (!playerHealth) {
        stopFight(pc);
    }

    if (settings.start) {
        order();
    }

    if (turns.pc) {
        pcGame();
    } else if (turns.player) {
        playerGame();
    }

    if (settings.start) {
        startGame();
    }
}




// rl.prompt();

// rl.addListener('line', (line) => {




//     startGame();



// })
rl.addListener('close', () => {
    console.log('Вы закрыли игру');
    process.exit(0);
});






/**
 * Prints messages. Can accept many arguments
 * @param {String} text print this line
 */
function printMessage(text) {

    if (arguments.length >= 1) {
        for (let i = 0; i < arguments.length; i++) {
            console.log('');
            console.log(arguments[i]);
        }
    }
}


function order(params) {

    const text = 'Ход ';

    let pcTurn = bones(),
        playerTurn = bones();

    turns.pc = 0;
    turns.player = 0;

    if (pcTurn != playerTurn) {

        const printName = {
            pc: 'компьютера',
            player: 'игрока'
        };
        let winner;

        if (pcTurn > playerTurn) {
            winner = pc;

        } else if (pcTurn < playerTurn) {
            winner = player;
        }
        turns[winner] = 1;

        printMessage(text + printName[winner]);

    } else {
        order();
    }

}



function bones() {
    let range = {
        min: 1,
        max: 6
    };
    return random(range.min, range.max);
}

/** Returns random number from the limit of the minimum and maximum.
 * Includes minimum and maximum. 
 * 
 * @param {number} min minimal value
 * @param {number} max maximum value
 */
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pcGame() {

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

    if (settings.player.health > 0) {
        attackEnemy(pc, attack);
    }
}

function attackEnemy(who, attack) {

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
            }
        }
        if (enemy) {
            settings[enemy].health -= attackPower;
        }

        // beauty output
        let printAttack;
        switch (attack) {
            case 'lowKick':
                printAttack = 'удар';
                break;
            case 'highKick':
                printAttack = "сильный удар";
                break;
            case 'heal':
                printAttack = 'аптечка';
                break;
            default:
                console.error('attack');
                break;
        }

        printAttack = printAttack.toUpperCase();
        let printChouse = `${printAttack} : ${attackPower}НР`;

        printMessage(printChouse);
        if (who === player) {
            settings.start = true;
            startGame();
        }
    }
}

function playerGame() {

    settings.start = false;


    console.log('Выбирай свою атаку');
    console.log('1: УДАР');
    console.log('2: СИЛЬНЫЙ УДАР');
    console.log('3: АПТЕЧКА');

    // printMessage();
    getAttack();


    function getAttack(params) {

        let attack;
        rl.prompt();
        rl.on('line', (line) => {
            let text = line.trim().toLowerCase();

            switch (text) {
                case '1':
                case 'удар':
                    attack = 'lowKick';
                    break;
                case '2':
                case 'сильный удар':
                    attack = 'highKick';
                    break;
                case '3':
                case 'аптечка':
                    attack = 'heal';
                    break;
                default:
                    break;
            }

            if (settings.player.health == '100' && attack === 'heal') {

                let wrongComand = `Вам пока не нужна аптечка - попробуйте удары.`;
                printMessage(wrongComand);

            } else if (settings.attacks[attack]) {
                attackEnemy(player, attack);
            } else {
                let wrongComand = `Варианты атак:
            УДАР | СИЛЬНЫЙ УДАР | АПТЕЧКА`;
                printMessage(wrongComand);
            }
        });

    }
}
function stopFight(winner) {
    if (winner === pc) {
        console.log('');
        console.log('Вам не повезло - выиграл компьютер');

    } else if (winner == player) {
        console.log('');
        console.log('Поздравляем! Вы одержали победу!');

    }
    settings.start = false;
    process.exit(0);
}