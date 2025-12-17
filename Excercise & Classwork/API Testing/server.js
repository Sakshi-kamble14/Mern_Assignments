const express=require("express") // Step 4
const app=express() // Step 5
const PORT=7000 // Step 6

// Step 8
// GET Method
// GET:URL:http://localhost:7000/test
app.get("/test",(request,response)=>{
    response.send("Hello from express Server");
});

//GET 
app.get("/fruits",(request,response)=>{
    const fruitArray= [
        { name: "Apple", color: "red", price: 100 },
        { name: "Banana", color: "yellow", price: 10 },
        { name: "Mango", color: "yellow", price: 50 },
        { name: "Stawberry", color: "red", price: 5 },
        { name: "Orange", color: "orange", price: 20 },
        { name: "Kiwi", color: "brown", price: 200 },
      ];

    response.send({
        status:"success",
        message:"data send",
        fruitArray:fruitArray,

    })
})

// POST
app.post("/login",(request,response)=>{
    response.send("POST method called");
});

// PUT
app.put("/update",(request,response)=>{
    response.send("PUT method called");

});

// DELETE 
app.delete("/delete",(request,response)=>{
    response.send("DELETE method called");
});


// Step 7
app.listen(PORT,() =>{
    console.log(`Server started at port : ${PORT}`)
});