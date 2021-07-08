import Bowman from '../../js/subClasses/bowman';

const success = {
    attack: 25,
    defence: 25,
    type: 'Bowman',
    level: 1,
    health: 100,
    name: 'Clinkz',
};

test('successful initialize', () => {
    const result = new Bowman('Clinkz');
    expect(result).toEqual(success);
});
