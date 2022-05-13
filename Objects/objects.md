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

 
