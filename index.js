const express = require('express')

const app = express()

app.use(express.json())

const books = [
    {id:1,title:'Ilon Mask',bet:300},
    {id:2,title:'Stiv Jobs',bet:400}
]

app.get('/api/books',(req,res)=>{
    res.send(books)
})

app.post('/api/books',(req,res)=>{
    const obj = {
        id:books.length +1,
        title:req.body.name
    }
    res.send(obj)
    books.push(obj)
})

app.get('/api/books/:id',(req,res)=>{
    const some = books.find(c=>c.id === parseInt(req.params.id))
    console.log(some);
    res.send(some)
})

app.put('/api/books/:id',(req,res)=>{
    const query = books.find(c=>c.id === parseInt(req.params.id))
    query.title = req.body.name
    res.send(query)

})

app.delete('/api/books/:id',(req,res)=>{
    const del = books.find(c=>c.id === parseInt(req.params.id))
    const idx = books.indexOf(del)
    books.splice(idx,1)
    res.send(books)
})


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`${PORT} started...`);
})