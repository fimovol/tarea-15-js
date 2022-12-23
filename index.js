const express = require("express")
const { default: mongoose } = require("mongoose")
require("dotenv").config()
const useRouter = require("./routes/user")


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use("/api",useRouter)


app.get("/",(req,res)=> {
    
    res.send(`MI APLICACION`)
})

mongoose.connect(process.env.MONGODB_URI)
.then( ()=> console.log("te as connecatado a mongo db atlas"))
.catch((error)=> console.error(error))

app.listen(port,()=> {
    console.log(`el servidor corre en http://localhost:${port}`)
})