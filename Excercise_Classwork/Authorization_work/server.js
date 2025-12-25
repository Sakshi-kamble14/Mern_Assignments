const express=require('express')

const app=express()
const PORT=7000

const {authUser,checkAuthorization}=require('./utils/auth')
const userRouter=require('./routes/user')



app.use(express.json())
// For using this middileware we give access like authorixe way
app.use(authUser)
app.use('/user',userRouter)

app.listen(PORT,'localhost',()=>{
    console.log("Server started at port ",PORT)
})