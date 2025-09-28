const express = require('express');
const {createToDo} = require('../controllers/todoControllers');
const router = express.Router();

router.post('/create-to-do', createToDo);



module.exports = router;