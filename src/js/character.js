export default class Character {
    constructor(name, type) {
        const types = ['Bowman', 'Swordman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (typeof name !== 'string') {
            throw new Error('incorrect value input');
        }
        if (name.length < 2) {
            throw new Error('too short name inputed');
        }
        if (name.length > 10) {
            throw new Error('too long name inputed');
        }
        if (!types.includes(type)) {
            throw new Error('there is no such type');
        }

        this.name = name;
        this.type = type;
        this.level = 1;
        this.health = 100;
    }
}
