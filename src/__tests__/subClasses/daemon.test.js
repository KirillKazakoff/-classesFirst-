import Daemon from '../../js/subClasses/daemon';

const success = {
    attack: 10,
    defence: 40,
    type: 'Daemon',
    level: 1,
    health: 100,
    name: 'Clinkz',
};

test('successful initialize', () => {
    const result = new Daemon('Clinkz', 'Daemon');
    expect(result).toEqual(success);
});
