import Undead from '../../js/subClasses/undead';

const success = {
    attack: 25,
    defence: 25,
    type: 'Undead',
    level: 1,
    health: 100,
    name: 'Clinkz',
};

test('successful initialize', () => {
    const result = new Undead('Clinkz', 'Undead');
    expect(result).toEqual(success);
});
