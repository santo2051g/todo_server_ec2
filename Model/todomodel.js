
import mongoose, { mongo } from "mongoose";


const todoSchema=mongoose.Schema({
    todo:{type:String,require:true,unique:true}
})

const todoCollection=mongoose.model("todos",todoSchema)

export default todoCollection;