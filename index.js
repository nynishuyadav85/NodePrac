const express = require('express')

const app = express();

app.use(express.json())



app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.get("/", (req, res) => {
    res.send("Working")
})

app.get("/user/:id", (req, res) => {
    console.log(req.params.id)
    res.send(`Id ye millla ${req.params.id}`)
})

app.get('/user', (req, res) => {
    const { status } = req.query
    res.send(`worked ${status}`)
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({ error: "Something went wrong" })
})

app.listen(3000, () => console.log("Server running on 3000"))