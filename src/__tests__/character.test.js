import {Bowman, Swordman, Magician, Undead, Zombie, Daemon} from '../js/charTypes.js';

const success = {
    attack: 25,
    defence: 25,
    type: 'Bowman',
    level: 1,
    health: 100,
    name: 'Clinkz'
}

test('successful initialize', () => {
    const result = new Bowman('Clinkz', 'Bowman');
    expect(result).toEqual(success);   
})

test('incorrect input', () => {
    const check = () => new Bowman('toobignameforitreallytoomuchomgmanwhoareyou', 'someType');
    expect(check).toThrow()
})

// const magSuccess = {
//     attack: 10,
//     defence: 40,
//     type: 'Magician',
//     level: 1,
//     health: 100,
//     name: 'Gregor'
// }

// test('mag test', () => {
//     debugger
//     const result = new Magician('Gregor', 'Magician');
//     expect(result).toEqual(magSuccess)
// })




