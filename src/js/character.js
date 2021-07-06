export default class Character {
    constructor(name, type) {
        const types = ['Bowman', 'Swordman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (typeof name == 'string' && name.length > 2 && name.length < 10 && types.includes(type)) {
            this.name = name;
            this.type = type;
            this.level = 1;
            this.health = 100;
        }
        else {
            throw new Error('some incorrect values were inputed');
        }
    }
}


