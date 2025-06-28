const express = require('express')
const app = express()
const app2 = express()
const port = 3000
const port2 = 8000

//app1
app.get('/', (req, res) => {
res.send('This is app 1')
})

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})

//app2

app2.get('/', (req, res) => {
res.send('This is app 2')
})

app2.listen(port2, () => {
console.log(`Example app listening
at http://localhost:${port2}`)
})
