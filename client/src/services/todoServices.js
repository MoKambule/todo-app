import axios from 'axios';
import { getUserDetails } from '../util/getUser';

const SERVER_URL = 'http://localhost:5000/api';

const authHeaders =()=>{
    let userToken = getUserDetails()?.token;
    return {headers:{'Authorization':userToken}}
}
const createToDo = (data)=>{
    return axios.post(SERVER_URL+'/create-to-do',data,authHeaders());
}

const getAllToDo = (userId)=>{
    return axios.post(SERVER_URL+'/get-all-to-do'+userId,authHeaders());
}

const updateToDo = (id,data)=>{
    return axios.post(SERVER_URL+'/update-to-do'+id,data,authHeaders());
}

const deleteToDo = (id)=>{
    return axios.post(SERVER_URL+'/delete-to-do'+id,data,authHeaders());
}

const ToDoServices ={
    createToDo, 
    getAllToDo,
    updateToDo, 
    deleteToDo
};

export default ToDoServices;