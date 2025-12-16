// Variable declaration

// In let -- > No Reclaration
let a=10
// let a=5 -- > Not allowed

// In const -- > No Reclaration

const b=10
// const b=5 -- > Not allowed

// In var --> Redeclaration is allowed
var c=10
var c=10 // -- > Allowed

console.log(`typeof(var)-${typeof(c)}`)

let n;
// Undefined
console.log(`typeof(n)-${typeof(n)}`)

// Boolean
n=true
console.log(`typeof(n)-${typeof(n)}`)

// Number
n=10
console.log(`typeof(n)-${typeof(n)}`)

// String
n='Sakshi'
console.log(`typeof(n)-${typeof(n)}`)

// Object
n=null
console.log(`typeof(n)-${typeof(n)}`)

// Functions
// --> Paramterless function
function f1(){
    console.log('Paramterless function f1()')
}
f1()


function f1(n1,n2){
    console.log('Paramterized function f1(n1,n2)')
    console.log(`The value of n1 is - ${n1}`)
    console.log('The value of n2 is - '+n2)
}
f1(10,20)

// In javascript function overloading is not allowed

// Exercise
// function login(email,password){
//     if(typeof email == "string" && typeof password == "string" )
//         confirm("Login Successful")
//     else{
//         confirm("Error while login")
//     }
// }
// login('sakshi',"23")

// // Function

// function login(email, password) {
//     if (typeof email === "string" && typeof password === "string") {
//         confirm("Login Successful");
//     } else {
//         confirm("Error while login");
//     }
// }

// // Taking values using prompt
// let email = prompt("Enter your email:");
// let password = prompt("Enter your password:");

// // Calling function with prompt values
// login(email, password);


// -->Loop 
for(let i=1;i<=10;i++){
    console.log("Hi Myself Sakshi \n")
}
let j=0
while(j<=5){
    console.log("Hi I want to become a software developer")
    j++;
}