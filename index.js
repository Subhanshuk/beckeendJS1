const express=require('express')
require('dotenv').config()
const app=express()

const port=3000

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/x',(req,res)=>{
    res.send('subhanshu__')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Log in</h1>')
})

app.get('/home',(req,res)=>{
    res.send('<h2>This is home page</h2>')
})
app.listen(process.env.PORT,()=>{
    console.log('server sterted at port no 3000')
})