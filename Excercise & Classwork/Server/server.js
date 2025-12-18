const express=require("express")
const app=express()
const PORT=6000

const userRouter=require("./routes/user")

app.use(express.json());
app.use((req, res, next) => {
    // for ever incoming request this middleware will be called
    const path = req.url
    if (path == '/user/signin' || path == '/user/signup')
        next()
    else {
        res.send('You need to be authorized')
    }
})
app.use('/user', userRouter)

app.listen(PORT,"localhost",()=>{
    console.log("Server started at port",PORT)
})