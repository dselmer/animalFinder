

function randomStat(stat, minStat = 0) {
    const maxAndMinStat = Math.floor(Math.random() * (stat - minStat) + minStat);
    return maxAndMinStat;
}



class Player {
    constructor(name, AnimalCollectionList = []) {
        this.name = name;
        this.healthPoints = 10;
        this.AnimalCollectionList = AnimalCollectionList;
    }

    addAnimal(animal) {
        if (this.AnimalCollectionList.length < 6) {
            return this.AnimalCollectionList.push(animal)
        } else {
            console.log('your collection is full');
        }
    }

    removeAnimal(animal) {
        let getAnimalByIndex = this.AnimalCollectionList.indexOf(animal.toLowerCase())
        let removedAnimal = this.AnimalCollectionList.splice(getAnimalByIndex, 1,);
        return removedAnimal;
    }

    getAllAnimals() {
        const { AnimalCollectionList } = this
        numberLoop(AnimalCollectionList)
    }
}

class Animal {
    constructor(name, health, attack, defense, speed) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
    }

    getHealth() {
        return this.health;
    }

    getAttack() {
        return this.attack;
    }

    getDefense() {
        return this.defense;
    }

    getSpeed() {
        return this.speed;
    }

    reduceHealth(healthLoss) {
        this.health = - healthLoss;

    }
    isAlive() {
        return this.health >= 0
    }

    getStats() {
        const { health, attack, defense, speed, name } = this;
        console.log(`animal ${name} stats : health ${health} attack ${attack} speed ${speed} defense ${defense}`)
    }

    getCombatMode(animal) {

        let { attack, health } = this

        while (health) {

            let randomAttack = randomStat(5, 1)
            let damage = randomStat(50, 5)

            switch (randomAttack) {
                case 4:
                    health -= damage;
                    console.log(`enemy hit you\nyou took ${damage} damage,\nyour health is ${health}`)
                    console.log(`-------------------------------------------------------------------------------------`)
                case 3:
                    animal.health -= damage;
                    console.log(`you hit enemy\nyou did ${damage} damage,\nyour enemy health is ${animal.health}`)
                    console.log(`-------------------------------------------------------------------------------------`)
                    break;
                case 2:
                    console.log(`Enemy attacked\nyou dodged`)
                    console.log(`-------------------------------------------------------------------------------------`)

                case 1:
                    console.log(`you attacked\nenemy dodged`)
                    console.log(`-------------------------------------------------------------------------------------`)
                // code block
            }
            
            if (animal.health <= 0 && health > 0) return console.log(`your animal ${this.name} has won the battle`)
            if (health <= 0 && animal.health > 0) return console.log(`your animal ${this.name} has lost the battle`);

        }
    }
}


class Continent {
    constructor(name, areas = [], animalList = []) {
        this.name = name;
        this.areas = areas;
        this.animalList = animalList;
    }

    getAreas() {
        const { areas } = this;

        for (let i = 0; i <= areas.length - 1; i++) {
            let count = 1;
            count += i
            console.log(`#${count}:${areas[i].name} `);

        }

    }
    addArea(area) {
        this.areas.push(area);
        console.log(`${area.name} has been added to ${this.name} `)
    }
}

class Area {
    constructor(name, animalList = []) {
        this.name = name;
        this.animalList = animalList;
    }

    addAnimal(animal) {
        this.animalList.push(animal);
        console.log(`${animal.name} to ${this.name}`)
    }
}

class Kangroo extends Animal {
    constructor(name) {
        super(name)
        this.health = randomStat(100, 50);
        this.attack = randomStat(25, 10);
        this.defense = randomStat(100, 50);
        this.speed = randomStat(100, 50);
    }
}

class Map {
    constructor(location = []) {
        this.location = location;
    }
    showMap() {
        const { location } = this

        for (let i = 0; i <= location.length - 1; i++) {

            let count = 1;
            count += i
            console.log(` #${count}:${location[i].name} `);
        }


    }
    updateLocation(newLocation) {
        this.location.push(newLocation);
        console.log(`added new location ${newLocation.name} to map`)
    }
}

// The seven continents are Africa, Antarctica, Asia, Australia, Europe, North America, and South America.

const Africa = new Continent('Africa');
const Antarctica = new Continent('AAntarcticarica');
const Asia = new Continent('Asia');
const Europe = new Continent('Europe');
const NorthAmerica = new Continent('North America');
const SouthAmerica = new Continent('South Americrica');


//3 Africa areas 
const Cairo = new Area('Cairo')
const Kenya = new Area('Kenya')
const capeTown = new Area('Cape Town')

// Africa.addArea(Cairo);
// Africa.addArea(Kenya)
// Africa.addArea(capeTown)

// Africa.getAreas()

//3 Antarctica areas

//3 Asia areas

//3 Europe areas

//3 North America areas

//3 South America areas


// map = new Map();
let australia = new Continent('australia', [], ['dog'])
sydeney = new Area('sydney');


let kangroo = new Kangroo('kangroo');
let joey = new Kangroo('joey');
let jack = new Kangroo('jack');
// console.log(jack)
joey.getCombatMode(jack)

// update
// map.updateLocation(australia);
// australia.addArea(sydeney);
// sydeney.addAnimal(kangroo);




//my test
//let australia = new Continent('australia', ['Kangroo city', 'sydney', 'sydney ocean'], ["Kangroo"]);  //testing continents
//let texas = new Continent('texas', ['texas city', 'texas ocean'], ["Kangroo"]);   //testing tex     // testing texas
// const map = new Map([australia,texas])
// let kangroo = new Kangroo('jack')


// console.log(kangroo.getStats())
// map.showMap()




