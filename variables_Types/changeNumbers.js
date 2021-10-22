function changeNumbers (array) {
   //if the array is empty or its not an array, it will return -1 
    if (!array) return -1;
    if (!array.length) return -1;
    //Here is the loop to pass for all of the array elements
    for (let i = 0; i < array.length; i++) {
        //Here im saying "if there is a zero, it wont change cuz is already a zero"
        if (array[i] === 0) {
            console.log ("You are already zero")
            //Here is actually the logic behind, where we check if its a even number and change it for zero.
        } else if (array[i] % 2 === 0){
            console.log(`Changing ${array[i]} for 0 !!`)
            array[i] = 0;
        }
    }

    return array;
}

//Here we created the array that will be our paremeter and called the function.
let Ourarray = [1, 32, 4, 6, 80, 24, 23, 90];
console.log(`Array input was: ${Ourarray}`);
changeNumbers(Ourarray); 
console.log(`Array output is: ${Ourarray}`);