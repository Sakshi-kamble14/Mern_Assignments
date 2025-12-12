// Function overloading
function f1(){
    console.log('Inside f1()')

}
// f1()

function f1(n1,n2){
    console.log('Inside f1(n1,n2)')
    console.log(`n1-${n1},typeof(n1)-${typeof(n1)}`)
    console.log(`n2-${n2},typeof(n2)-${typeof(n2)}`)

}

f1(10,20)
f1()