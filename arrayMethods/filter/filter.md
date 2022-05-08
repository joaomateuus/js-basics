# Filter
## `Array.prototype.filter` is an array method that return to us only the Arraydata that returns true to the conditional that we set.

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

const filteredItems = items.filter((item) => item.price < 100);

console.log(filteredItems);
/*
{name: 'Bike', price: 100},
{name: 'Album', price: 10},
{name: 'Book', price: 5},
{name: 'Keyboard', price: 25}   
*/
console.log(items)
/*
{name: 'Bike', price: 100},
{name: 'Tv', price: 200},
{name: 'Album', price: 10},
{name: 'Book', price: 5},
{name: 'Phone', price: 500}
{name: 'Computer', price: 1000}
{name: 'Keyboard', price: 25}
*/  
````
## As we can see the filter method return to us a new array populated with the data thar we wanted (as we set in the conditional).