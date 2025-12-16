// Array iteration
const arr=[10,20,30,40,50,60]

// index based loop 
console.log("Index based loop");

for (let i=0;i<arr.length;i++){
    console.log(`element - ${arr[i]}`)    
}

console.log("\nFor-of loop");
 for(const element of arr)
    console.log(`element - ${element}`);
console.log(`\nFor-in loop`)
for(const variable in arr){
    console.log(`element - ${variable}`)
}
// It will iterate for key elements
console.log(`\n\nSecond wala For-in loop`)
for(const variable in arr){
    console.log(`element - ${arr[variable]}`)
}