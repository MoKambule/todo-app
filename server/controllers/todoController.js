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

    exports.getAllToDo = async (req,res)=>{
        let {userId} = req.params;

        try{
            const result = await ToDo.find({createdby:userId});
            res.send(result);
        }catch(err){
            console.log(err);
            res.status(400).send(err);
        }
    }
 
       exports.deleteToDo = async (req,res)=>{

        try{
            const {id} = req.params;
            const result = await ToDo.findByIdAndDelete(id);
            res.send({message: 'ToDo Task Deleted!'});
        }catch(err){
            console.log(err);
            res.status(400).send(err);
        }
    }

       exports.updateToDo = async (req,res)=>{

        try{
             const {id} = req.params;
             const data = req.body;
            const result = await ToDo.findByIdAndUpdate(id,{$set:data},{returnOriginal:false} );
            rconsole.log(result);
            ews.send({message:'ToDo list Updated!'});
        }catch(err){
            console.log(err);
            res.status(400).send(err);
        }
    }
