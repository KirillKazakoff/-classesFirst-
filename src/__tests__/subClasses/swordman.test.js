import Swordman from '../../js/subClasses/swordman';

const success = {
    attack: 40,
    defence: 10,
    type: 'Swordman',
    level: 1,
    health: 100,
    name: 'Clinkz',
};

test('successful initialize', () => {
    const result = new Swordman('Clinkz');
    expect(result).toEqual(success);
});
