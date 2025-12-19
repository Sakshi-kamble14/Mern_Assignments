const { createPool } = require("mysql2");

const pool=createPool({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'internship_db'
})
module.exports=pool