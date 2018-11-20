
const Batman = {
    identity: 'Bruce Wayne',
    city: 'Gotham City',
    team: 'Justice League',
    trademark_gear: 'cape and cowl',
    skills: detective,
    works_during: 'night'
}

const Nightwing = {
    identity: 'Dick Grayson',
    city: 'Blüdhaven',
    team: 'Teen Titans',
    weapons: 'escrima batons',
    skills: acrobat,
    works_during: 'night'
}

function Vigilante(identity, city, team, skills, heroName) {
    this.identity = identity;
    this.city = city;
    this.team = team;
    this.skills = skills;
    this.heroName = heroName;
};


var Batman = new Vigilante('Bruce Wayne', 'Gotham', 'Justice League', 'detective', 'Batman');
Batman.trademark_gear = 'cape and cowl';

var Nightwing= new Vigilante('Dick Grayson', 'Blüdhaven', 'Teen Titans', 'acrobat', 'Nightwing');
Nightwing.weapons = 'escrima batons';


var RedHood = new Vigilante ('Jason Todd', 'Gotham', 'Outlaws', 'sharpshooter', 'Red Hood');
var Batgirl= new Vigilante('Barbara Gordon', 'Gotham', 'Birds of Prey', 'hacker', 'Batgirl');
var GreenArrow= new Vigilante('Oliver Queen', 'Star City', 'Justice League', 'archer', 'Green Arrow');


var Batman = new Vigilante('Bruce Wayne', 'Gotham', 'Justice League', 'detective', 'Batman');
Batman.trademark_gear = 'cape and cowl';
 
var Nightwing= new Vigilante('Dick Grayson', 'Blüdhaven', 'Teen Titans', 'acrobat', 'Nightwing');
Nightwing.weapons = 'escrima batons';


Vigilante.prototype.introduce = function () {
    return this.heroName + ' is a member of The ' + this.team +
     ' and is an excellent ' + this.skills;
}


Batgirl.introduce();

'Batgirl is a member of The Birds of Prey and is an excellent hacker'


class Hero {
    constructor(identity, city, team, skills, heroName) {
        this.identity = identity;
        this.city = city;
        this.team = team;
        this.skills = skills;
        this.heroName = heroName;
    }
    defend() {
        console.log(this.heroName + ' defends ' + this.city);
    }
}


let Batman = new Hero('Bruce Wayne', 'Gotham', 'Justice League', 'detective', 'Batman');


class Sidekick extends Hero {
    constructor(identity, city, team, skills, heroName, weapons) {
    super(identity, city, team, skills, heroName);
    this.weapons = weapons;
    }
}

let Nightwing= new Sidekick('Dick Grayson', 'Blüdhaven', 'Teen Titans',
                         'acrobat', 'Nightwing', 'escrima batons');
let RedHood= new Sidekick('Jason Todd', 'Gotham', 'Outlaws', 'sharpshooter',
                         'Red Hood', 'dual pistols');

class Sidekick extends Hero {
    constructor(  ) {
    ///
    }
    defend(){
    super.defend();
    }
}
    

class Hero {
    constructor(identity, city, team, skills, heroName, trademark_gear) {
        this.identity = identity;
        this.city = city;
        this.team = team;
        this.skills = skills;
        this.heroName = heroName;
        this.trademark_gear = trademark_gear;
    }
}
let Batman = new Hero('Bruce Wayne', 'Gotham', 'Justice League', 'detective', 'Batman', 'cape and cowl');


class Sidekick extends Hero {
    constructor(identity, city, team, skills, heroName, weapons) {
        super(identity, city, team, skills, heroName);
        this.weapons = weapons;
        delete this.trademark_gear;
    }
}

let Nightwing = new Sidekick('Dick Grayson', 'Blüdhaven', 'Teen Titans', 
                            'acrobat', 'Nightwing', 'escrima batons');


class Hero {
    constructor(identity, city, team, skills, heroName, trademark_gear) {
        this.identity = identity;
        this.city = city;
        this.team = team;
        this.skills = skills;
        this.heroName = heroName;
        this.trademark_gear = trademark_gear;
    }
}
let Batman = new Hero('Bruce Wayne', 'Gotham', 'Justice League', 
                        'detective', 'Batman', 'cape and cowl');

class Sidekick extends Hero {
    constructor(identity, city, team, skills, heroName, weapons) {
        super(identity, city, team, skills, heroName);
        this.weapons = weapons;
        delete this.trademark_gear;
    }
}
let Nightwing = new Sidekick('Dick Grayson', 'Blüdhaven', 'Teen Titans', 
                            'acrobat', 'Nightwing', 'escrima batons');