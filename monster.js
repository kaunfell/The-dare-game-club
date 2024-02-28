const energySource = ['ectoplasm', 'blood', 'bandages', 'moonlight', '', 'brains'];
const power = ['invisibility', 'super strength', 'fire breathing', 'speed'];
const weakness = ['fire', 'garlic', 'cats', 'silver', 'water'];

const ghostObject = {
    name: 'Thick Boi',

    energySource: 'ectoplasm',
    power: 'invisibility',
    weakness: 'fire',
    health: 100,
    strength: 70,
    'common abilities': {
        dance: true,
        run: true,
        count: false,
        firemaking: false,
    },
    scare: 'Boo!',
};

const vampireObject = {
    name: 'Drag-Ula',
    
    energySource: 'blood',
    power: 'invisibility',
    weakness: 'garlic',
    health: 100,
    strength: 80,
    'common abilities': {
        dance: true,
        run: true,
        count: false,
        firemaking: false,
    },
    scare: 'I want some blooood!',
};


const mummyObject = {
    name: 'Mumford',
    
    energySource: 'bandages',
    power: 'super strength',
    weakness: 'cats',
    health: 100,
    strength: 60,
    'common abilities': {
        dance: true,
        run: false,
        count: false,
        firemaking: false,
    },
    scare: 'Mummy coming through!',
};


const werewolfObject = {
    name: 'Wolfie',

    energySource: 'moonlight',
    power: 'speed',
    weakness: 'silver',
    health: 100,
    strength: 90,
    'common abilities': {
        dance: false,
        run: true,
        count: false,
        firemaking: false,
    },
    scare: 'Awhoooo!',
};

const dragonObject = {
    name: 'Tiny Flame',

    energySource: '',
    weakness: 'water',
    power: 'fire breathing',
    health: 100,
    strength: 100,
    'common abilities': {
        dance: false,
        run: false,
        count: false,
        firemaking: true,
    },
    scare: 'Roar!',
};


const zombieObject = {
    name: 'Zom-B',

    energySource: 'brains',
    power: 'invisibility',
    weakness: 'fire',
    health: 100,
    strength: 50,
    'common abilities': {
        dance: true,
        run: true,
        count: false,
        firemaking: false,
    },
    scare: 'Braaaains!',
};



export { ghostObject, vampireObject, mummyObject, werewolfObject, dragonObject, zombieObject  };