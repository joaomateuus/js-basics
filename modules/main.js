//Here im importing what I´ve exported in functions file
import { showAge, showCity, showHobby } from "./functions.mjs";

//Here im calling the functions
//And passing the paremeters 
console.log(showAge('João', 20));
console.log(showCity('João', 'Manaus'));
console.log(showHobby('João', 'Coding'));

