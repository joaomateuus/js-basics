//created a func that calls others for each frase 
function comparing(num1, num2) {
    const fisrtSentence = creatingSentence(num1, num2);
    const secondSentence = creatingSentence2(num1, num2);
    return `${fisrtSentence} ${secondSentence}`
}

//Checking if they have the same value
function creatingSentence(num1, num2) {
    let areEqual = 'Are equal'

    if(num1 != num2) {
        areEqual = 'Are not equal'
    }

    return `The numbers ${num1} and ${num2} ${areEqual}`;
}

function creatingSentence2(num1, num2) {
    let sum = num1 + num2;
    const compare20 = sum > 20;
    const compare30 = sum >= 30;
    let result20 = 'smaller'
    let result30 = 'smaller';

    if(compare20) {
        result20 = 'bigger'
    }

    if(compare30){
        result30 = 'bigger/same'
    }
    return `The sum is ${sum} that is ${result20} than 20, and ${result30} than 30.`
}

console.log(comparing(10,20));