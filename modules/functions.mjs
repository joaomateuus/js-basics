//Creating the functions that I´ll export
function showAge (name, age) {
    return `${name} is ${age} years old`;
};

function showCity (name, city) {
    return `${name} is from ${city}`;
};

function showHobby (name, hobby) {
    return `${name} said that his/her hobby is ${hobby}`
};

//Doing the exports that is actually each function
export { 
    showAge,
    showCity,
    showHobby
};



