import Zombie from '../../js/subClasses/zombie';

const success = {
    attack: 40,
    defence: 10,
    type: 'Zombie',
    level: 1,
    health: 100,
    name: 'Clinkz',
};

test('successful initialize', () => {
    const result = new Zombie('Clinkz');
    expect(result).toEqual(success);
});
