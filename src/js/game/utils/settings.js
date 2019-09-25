export const settings = {

    pc: {
        health: 100,
        priority: {
            1: 'lowKick',
            2: 'highKick',
            3: 'heal'
        }
    },
    player: {
        health: 100
    },

    // low kick range
    lowKick: {
        min: 18,
        max: 25,
    },
    // high kick range
    highKick: {
        min: 10,
        max: 35,
    },
    // healing range
    heal: {
        min: 18,
        max: 25,
    }
};