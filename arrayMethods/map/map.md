# Map
## `Array.prototype.map` is an array method that we use to going through each array item, it will receive a callback function that can change the index´s value,  based in the logic that we implemented in the callback function that we passed.
````
const items = [
    {name: 'Bike', price: 100},
    {name: 'Tv', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500}
    {name: 'Computer', price: 1000}
    {name: 'Keyboard', price: 25}
];

const mapItems = items.map((item) => {
    return item.price + 10;
    console.log(mapItems);
})
````
<br>

# What`s the diference between Map and forEach ?
- ## 
- ##