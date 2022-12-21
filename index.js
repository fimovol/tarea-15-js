const express = require("express")
const app = express()
const port = 3000

app.get("/",(req,res)=> {
    numero = 1
    numero2 = 2
    resultado = numero + numero2
    res.send(`${numero} + ${numero2} = ${resultado}`)
})
app.listen(port,()=> {
    console.log(`el servidor corre en http://localhost:${port}`)
})