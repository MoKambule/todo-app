import { message } from "antd";
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

const authenticateToken = async (req,res,next)=>{
    let token = req.header('Authorization');

    if(token) return res.status(400).send({message:'Authentication failed'});

    jwt.verify(token,secretKey,(err,user)=>{
        if(err) return res.status(400).json({message:'Token is not valid'  });
            req.user = user;
            next();
      
    })
}

module.exports = authenticateToken;