//Creating an array to use as parameter
const ourArray = [30, 25, 40, 5, 25, 40, 3034, 5 ];

function uniqueValues(array){
    // creating a const variable to use "set"
    const mySet = new Set(array)

//and returning it with the "spread" technique
//to return an a new array, not only putting set inside it.
    return [...mySet];
}

//Calling our function and passing our array as a parameter
console.log(uniqueValues(ourArray));