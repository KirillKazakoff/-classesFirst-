import Magician from '../../js/subClasses/magician';

const success = {
    attack: 10,
    defence: 40,
    type: 'Magician',
    level: 1,
    health: 100,
    name: 'Clinkz',
};

test('successful initialize', () => {
    const result = new Magician('Clinkz', 'Magician');
    expect(result).toEqual(success);
});
