// ---------INTERACTING WITH HTML--------------------------------------------------------- 

// Here we are adding the event listeners 
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');

// In those ones the tag name will return an array in console
//IT WILL RETURN EVERYTHING THAT IS INSIDE THE TAG
// SO ITS NECESSARY TO SELECT THE ARRAY INDEX THAT YOU WANT
const body = document.getElementsByTagName('body') [0]; // <-- !!!
const footer = document.getElementsByTagName('footer') [0]; // <---- !!!

button.addEventListener('click', changeMode);
// ---------INTERACTING WITH HTML--------------------------------------------------------- 

// ---------ALL THE FUNCIONALITIES-------------------------------------------------------- 

// In js is recommended to use only one responsible for each function
// So we created two functions, cuz we have to change the classes and titles
// To make it dark/ligth and telling the respective mode on screen

function changeMode(){
    changeClasses();
    changeText();
}

// This function will active and desactive darkmode 
function changeClasses(){
// Here we created a const with the css class to receive the listeners 
const darkModeClass = 'dark-mode';
    //"toggle" is used to change our class in the HTML template, 
    //it will put or take off from it.  
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

// Here is the function that will change the text
// Telling the respective mode on screen
function changeText(){
// Here we created a const with the css class to receive the listeners 
    const ligthMode = "Light Mode ";
    const darkMode = "Dark Mode ";
// if there is dark mode on class listener its cuz the ligth is on so it will change 
    if (body.classList.contains('darkModeClass')) {
// writing "ligh mode on button" and changing the tittle to "Dark mode ON"
        button.innerHTML = ligthMode;
        h1.innerHTML = darkMode + 'ON';
        return;
    } 
        button.innerHTML = darkMode;
        h1.innerHTML = ligthMode + 'ON';
    
}
//---------ALL THE FUNCIONALITIES---------------------------------------------------------------- 


