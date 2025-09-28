const ToDo = require("../models/todolist");

exports.createToDo = async (req,res)=>{
    try{
        const{data} = req.body;
        const toDo = new ToDo(data);
        const result = await toDo.save();
        console.log(result);
        res.status(201).send({message:"created new task"})
    }catch(err){
        console.log(err);
        res.status(err);
    }}