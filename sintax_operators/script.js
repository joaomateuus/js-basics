//Here im creating functions for each setence, because I need to do two different opperations, and after it i´ll call them
function comparing (num1, num2) {
    const firstPhrase = creatingPhrase(num1, num2);
    const secondPhrase = creatingPhraseTwo(num1, num2);
    
    return `${firstPhrase} ${secondPhrase} `
       
}

//This function will say if they are equal
function creatingPhrase(num1, num2){
    let areEqual = 'Are equal';

    if (num1!==num2) {
        areEqual = 'Are not equal'
    }

return `The numbers ${num1} and ${num2} ${areEqual}`
};

//This function will sum the numbers and see if they are smaller/bigger than 10 and 20
function creatingPhraseTwo(num1, num2) {
    const sum = num1 + num2;
    
    let result10 = 'smaller'
    let result20 = 'smaller'
    const compare10 = sum >10;
    const compare20 = sum > 20;

    if (compare10) {
        result10 = 'bigger'
    }

    if (compare20) {
        result20 = 'bigger'
    }

    return `The sum is ${sum} that is ${result10} than 10, and ${result20} than 20`
}

//Here Im calling the function and passing the paremeters 
console.log(comparing(1,2));
