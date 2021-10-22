//Data that we are going to pass to the function
const person0 = {
    name: 'João',
    age: 20
}

const person1 = {
    name: 'Camila',
    age: 25
}

const animal = {
    name: 'Chico',
    age: 5,
    type: 'Cat'
}


//Function that calculate the future age, and catch the datas that we´ve created
function calculateAge(years) {
	return `In ${years} years, ${this.name} will be ${
		this.age + years
	} years old.`;
}


// Here we called our function
console.log(calculateAge.call(animal, 7));
//with call, that is used to call a function with a given 'this' and arguments provided
//to it individually.

console.log(calculateAge.apply(person1, [4]));
//And with apply that does the same thing but is used to call other functions with
//a provided this keyword value and arguments provided in the form of array
//or an array like object.