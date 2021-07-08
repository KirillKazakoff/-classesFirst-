import Bowman from '../js/subClasses/bowman';

test('too long name inputed', () => {
    const check = () => new Bowman('toobignameforit', 'Bowman');
    expect(check).toThrow('too long name inputed');
});

test('too short name inputed', () => {
    const check = () => new Bowman('t', 'Bowman');
    expect(check).toThrow('too short name inputed');
});

test('incorrect value input', () => {
    const check = () => new Bowman(1, 'Bowman');
    expect(check).toThrow('incorrect value input');
});
