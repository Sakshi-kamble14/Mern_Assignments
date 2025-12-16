// Array 
const arr=[]
console.log(arr)
console.log(`typeof(array)-${typeof(arr)}`) // Empty Object

const arr2=[10,20]
console.log(arr2);

const arr3=new Array()
arr3.push(10)
arr3.push(20)
arr3.push(30)
arr3.push(40)

arr3.pop()
console.log(arr3.length)
console.log(arr3)

// Array Methods

const fruits=['Banana','Orange','Apple','Mango']
let fruit=fruits.at(2) // Returns the item located at the specified index.
console.log(fruit);

fruits.unshift("Lemon")
console.log(fruits); 
//Inserts new elements at the start of an array, and returns the new length of the array.


