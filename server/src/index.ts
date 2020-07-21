import express from 'express'

const app = express();

app.get('/', (req,res)=>{
    res.send('Hello world s')
})

app.listen(5000)

console.log("API started on port 5000")