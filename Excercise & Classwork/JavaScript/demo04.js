// Function in javascript


// Paramterless function
function f1(){
    console.log('Inside f1()')
}

f1()

// Paramterized function
function f2(n1,n2){
    console.log('Inside f2(n1,n2)')
    console.log(`n1-${n1},typeof(n1)-${typeof(n1)}`)
    console.log(`n2-${n2},typeof(n2)-${typeof(n2)}`)
}
f2(10,20)
f2(10,)
f2()
f2(null,20)
f2('rohan',)