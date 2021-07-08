import Character from '../character';

export default class Swordman extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
        this.type = type;
    }
}
