//For a block scope variables can only be declared within a specific block enoclosed by {curly brackets}//
{
    let x = 5;
    console.log(x); // x is defined here because it's within the block scope
    
}
// console.log(x); but x will flag undefined here if consoled because it's outside the scope.

//For a function scope,variables declared within a javascript function are local to the function and cannot be used outside the function.
function myFunction(){
    let carName = "Honda";
    console.log(carName);
    
} myFunction()
// console.log(carName);
// myFunction() carName is undefined here because is outside the function and therefore cannot be invoked.

// Global Scopes variables can be redeclared outside a function
{var y = 4};
{let y = 8
console.log(y)
};
;
{const y = 12;
console.log(y)};
console.log(y);//global scope

//The Let keyword allows you to declare a variable within a block scope
var x = 12;
console.log(x);

{let x = 16;
console.log(x);
}

// The const keyword allows you to declare a javascript variable with a constant value. Constants are similar to let variables except that the value cannot be changed. It is constant.
var x = 22;
{const x = 24;
console.log(x);}

// Arrow functions are a shorter way to write functions in JavaScript.
// Traditional functions example:
function add (a, b) {
    return a + b
}
console.log(add(3,7));

// Arrow functions
let Add = (c,d) => c + d
console.log(add(10,20));

//An array is a special variable, which can hold more than one value.
let fruits = ["Strawberry" , "Mango" , "Orange" , "Banana" , "Apple"]
console.log(fruits);

// The Map method
//The map() method in JavaScript is used to iterate over an array and apply a callback function to each element, returning a new array with the results. It does not modify the original array.

let Fruits = ["Strawberry", "Mango", "Orange", "Banana", "Apple"];

// Let's map over this array and convert "Orange" and "Apple" to uppercase. 
// We'll map over it to first check if the fruit is "Orange" or "Apple" .

let newFruits = Fruits.map(Fruit => {
    if (Fruit === "Orange" || Fruit === "Apple") {
        return Fruit.toUpperCase();  // Convert to uppercase if it’s "Orange" or "Apple"
    }else
    return Fruit;  // Otherwise, return the fruit unchanged
});

console.log(newFruits);  // Logs: ["Strawberry", "Mango", "ORANGE", "Banana", "APPLE"]

//Filter Method
//The filter() method does not modify the original array but instead iterates through the array and returns a new array with the filtered elements.

let Fruity = ["Strawberry", "Mango", "Orange", "Banana", "Apple","Apricot"]
//Let's filter fruits that starts with the letter 'A',
let FruityWithA = Fruity.filter(Fruity => Fruity.startsWith("A"));
console.log(FruityWithA);









