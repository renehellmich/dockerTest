import express from 'express';

const app = express()

app.get('/', (req, res)=>{
    res.send("Hello")
})
app.get('/env', (req, res)=>{
    res.send(process.env.VARIABLE)
})

app.listen(3000, ()=>{
    console.log('listening on http://localhost:3000')
})