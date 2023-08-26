const express = require('express')
const app = express()



// http Methods
// 1. GET
// 2. POST
// 3. PUT
// 4. DELETE

app.get("/",()=>{
    console.log("Main Route Hit by someone")
})


app.listen(3000,()=>{
    console.log("Backend is Ready...")
})