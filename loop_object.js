/**
 * ### Task-5 (Hard)

Loop through an object and print the key-value pairs with their `types`

**Input:**
<br>

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

**Output:**
 */

let myObject = {
    name: 'John lee',
    age: 25,
    city: 'Shanghai',
    isActor: true
}

for(let key in myObject){

    console.log(key, '| Type of key is:',typeof(key));
    console.log(myObject[key], '| Type of value is:', typeof(myObject[key]));
}