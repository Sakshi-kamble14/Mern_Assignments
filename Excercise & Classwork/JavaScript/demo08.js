//Function alias 
// It means that storing the function in other variable
function add(n1,n2){
    console.log(`n1 + n2= ${n1+n2}`)
}
add(10,20)
const myadd=add
myadd(30,40)
console.log(`add-${add},typeof(add)-${typeof(add)}`)
console.log(`myadd-${myadd},typeof(myadd)-${typeof(myadd)}`)

// Output
// n1 + n2= 30
// n1 + n2= 70
// add-function add(n1,n2){
// console.log(`n1 + n2= ${n1+n2}`)
// },typeof(add)-function
// myadd-function add(n1,n2){
// console.log(`n1 + n2= ${n1+n2}`)
// },typeof(myadd)-function


