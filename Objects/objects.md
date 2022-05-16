# Objects 
### An object is a collection of related data or funcionality. These usually consist of several variables and functions (wich are called properties and methods when they are inside objects)

## Initializing an object
````
const person = {};
````
- ### So try to console.log this object and you´ll find smth like this.
````
[object Object]
Object{ }
{ }
````
### Congratulations!! you´ve just created your first object, but is an empty one so we dont have to much to do with it, so lets populate it.
````
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    //bio() can be written like this too
    bio: function() {
        console.log(`${this.name[0]} ${this name[1]} is ${this.age}`);
    },
    introduceSelf: function() {
        console.log(`Hi I´m ${this.name[0]}`);
    }

}
````
And if you call the object properties, you´ll see that we got some data and funcionalities.
````
person.name;
person.name[0];
person.age;
person.bio();
person.introduceSelf();
````
### So that´s how we can acesss our data
<br>

# What´s going on here ?
## Structure
- ### So an object is made up of multiple members, each has a name and a value.
- ### Name and values are separated by a colon.
- ### Each name/value pair must be separated by a comma.
````
const objectName = {
    member1Name: member1Value,
    member2Name: member2Value,
    member3Name: member3Value
};
```` 
### The value of an object can be prety much everything, in the example that we showed we´ve got a number, an array and two functions.
- ### Data: the first two items are data and are referred to the object as object`s properties.
- ### Methods: the last ones are functions that allow the object to do something with the data. 
<br>

# What does literal objects means ?
### Objects like we made are referred to as an object literal, cuz we have literally written out the object contents as we´ve come to create it.
### Its very commom to create an object using an object literal when you want to transfer a series of structured, related data items in some manner, for example sending requests to the server, is much easier send one object literal and work with it in an array.
<br>

# Dot notation 
## As we already did, we can acess our object data with a dot notation.

- ### The object name acts like a namescpace, it must be entered first seeing that is how we can acess our object data.
- ### Next you write a dot, then the item that you want to acess.
    - ### It can be a name of a single property, an item of an arrat property, or a call to one object´s methods for example.
````
person.age;
person.bio();
````
<br>

# What is "this" ?
### You might have already seen smthg like this in your code.
````
introduceSelf() {
    console.log(`Hi! Im ${this.name[0]}.`);
}
````
### The `this` keyword refers to the current object the code is being written inside.
<br>

- ## But why not just write the object name instead ?
    - ### Well when you only have to create a single object literal, it´s not so useful, but if u create more than one this allow you to use the same definition for every object. 
    ````
    const person1 = {
        name: 'Chris',
        introduceSelf() {
            console.log(`Hi! Im ${this.name}.`);
        }
    }
    const person2 = {
        name: 'Carlos',
        introduceSelf() {
            console.log(`Hi! Im ${this.name}.`);
        }
    }
    ````
    ### In this case the methods will displayed the respective data from their objets, fisrt one chris and second carlos, even though the method is exactly the same. <br> Very usefull when we are writing object literals and will be essential when we start see constructors.
<br>

# Introducing constructors
### A constructor is a special function that recreates and initializes an object instance of a class.
- ### A constructor gets called when a object is created using the new keyword.
- ### The purpose of a constructor is to create a new object and set value for any existing object properties.
````
Class Product
    constructor() {
        this.id = 1;
        this.arrayProducts = [];
        this.editId = null;        
    };

    inputReader() {
        let product = {};

        product.id = this.id
        product.name = document.getElementById('name').value;
        product.value = document.getElementById('value').value;
        product.category = document.getElementById('category').value;
            
        return product;
    }

}

const product = new Product();
````
<br>

# You´ve been using objects all long
### Every time that we did an example with the browserApi or a jsObject, we used objects, that´s beacause every features are built using the same object structure that we´re seeing here.
<br>

## Methods in primitive types 

````
myString.split(',');
````

### Like this methods that we use in strings that are primitive types and not allowed to it. <br> Every time the type string is assigned for a variable it´s created an instance for String allowing it to use their methods.
<br>

## Acessing Document Object Model
````
const myDiv = document.createElement('div');
const myVideo = document.querySelector('video');
````
### If you were using methods avaibles on a Document object. For each webpage is loaded, an instance of Document is created, called document, wich represents the entire page´s structures, content, and other features such as it´s URL.

 
