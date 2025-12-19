const express=require('express')
const cryptojs=require('crypto-js')
const jwt=require('jsonwebtoken')

const pool=require('../db/pool')
const result=require('../utils/result')
const config=require('../utils/config')

const router=express.Router()

router.post('/signup',(request,response)=>{
    const {name,email,password,mobile}=request.body
    const sql='Insert into users (name,email,password,mobile) values(?,?,?,?)'
    const hasedPassword=cryptojs.SHA256(password).toString()
    pool.query(sql,[name,email,hasedPassword,mobile],(error,data)=>{
        response.send(result.creatResult(error,data))
    })
});

router.post('/signin', (request, response) => {
    const { email, password } = request.body
    const hashedPassword = cryptojs.SHA256(password).toString()
    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`
    pool.query(sql, [email, hashedPassword], (error, data) => {
        if (error)
            response.send(result.createResult(error))
        else if (data.length == 0)
            response.send(result.createResult("Invalid email or password"))
        else {
            const user = data[0]
            // create the JWT token
            // inside the payload store the data that needs to be encryted into the token
            const payload = {
                uid: user.uid,
                email: user.email
            }
            const token = jwt.sign(payload, config.SECRET)
            const userData = {
                name: user.name,
                mobile: user.mobile,
                token
            }
            response.send(result.creatResult(null,userData))
        }
    })
})

router.get('/',(request,response)=>{
    const {email}=request.query
    // console.log(email);
    
    const sql='Select * from users where email=?'
    pool.query(sql,[email],(error,data)=>{
        // console.log(data);
        
        response.send(result.creatResult(error,data))
        
    })
})

router.delete('/:uid',(request,response)=>{
    const uid=request.params.uid
    const sql='Delete from users where uid=?'
    pool.query(sql,[uid],(error,data)=>{
        response.send(result.creatResult(error,data))
    })
})

router.get('/',(request,response)=>{
    const email=request.headers.email
    const sql=`Select * from users where email =?`
    pool.query(sql,[email],(error,data)=>{
        response.send(result.creatResult(error,data))
    })
})

router.delete('/',(request,response)=>{
    const uid=request.headers.uid
    const sql=`Delete from users where uid=?`
    pool.query(sql,[uid],(error,data)=>{
        response.send(result.creatResult(error,data))
    })
})
module.exports=router