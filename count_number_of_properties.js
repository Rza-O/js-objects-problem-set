/**
 * ### Task-4

Count the `number of properties`.

**Input:**
```js
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
```
 */

const student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isSinger: true
}

let key = Object.keys(student);
console.log(key.length)
