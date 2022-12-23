const mongose = require("mongoose")

const userSchema = mongose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        age:{
            type:Number,
            required: true
        },
        email:{
            type:String,
            required:true
        }
    }
)
module.exports = mongose.model("User",userSchema)