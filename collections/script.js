function getAdmin(map){
// Array that will receive our sets from the map
let adms = [];

// A loop to go through the map values
    for ([key, value] of map){
        //If the value is admin       
        if (value === 'Adm'){
        //It will add to our empty array
            adms.push(key);
        }
    }

    return adms;
}

//The map that we created with the datas that we set
const users = new Map();
users.set('Carlinhos', 'Adm');
users.set('Maria', 'user');
users.set('João', 'Adm');
users.set('Eduarda', 'Adm');
users.set('Mateus', 'user');
users.set('José', 'Adm');

console.log(getAdmin(users));

