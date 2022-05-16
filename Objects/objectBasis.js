/* exercise 1
const cat = {
    color: '',
    greeting: function() {
        console.log('My name is cat')
    }
}
cat.catName= 'Linux';
cat.greeting();
cat.color= "black";
*/

// exercise 2
const favBand = {
    name: 'Red Hot Chilli Peppers',
    nationality: 'USA',
    genre: 'Rock',
    members: 'Anthony kieds, Flea, Chad Smith, John Frusciante',
    formed: '1983',
    split: 'never',
    albums: [
        {name: 'Otherside', released: '1998'},
        {name: 'Califonication', released: '2001'}
    ]
}

let infoBand = `My fav band name is called ${favBand.name} that its from ${favBand.nationality},
formed by ${favBand.members} in ${favBand.formed} and the most famous albums are ${favBand.albums[0].name} 
from ${favBand.albums[0].released} and ${favBand.albums[1].name} from ${favBand.albums[1].released}`;

//exercise 3
const cat = {
    nome: 'Carlos the cat',
    color: 'black',
    breed: 'Persa',
    greeting: function() {
        console.log(`Hello my name is ${this.nome} and Im a ${this.breed}`);
    }
}

const cat2 = {
    nome: 'Ronaldo Juca',
    color: 'white',
    breed: 'Viralata',
    greeting: function() {
        console.log(`Hello my name is ${this.nome} and Im a ${this.breed}`);
    }
}

function Cat(name, breed, color) {
    this.name = name,
    this.color = color,
    this.breed = breed,
    this.greeting = function() {
        console.log(`Hello my name is ${name} and Im a ${breed}`);
    }
}

const catUnificado = new Cat('Super cat', 'Mutante', 'Cromado');
const catTeste = new Cat('Chico', 'Viralata', 'Preto');

catUnificado.greeting();
catTeste.greeting();