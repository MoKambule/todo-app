const express = require('express');
const {createToDo, getAllToDo, deleteToDo,updateToDo} = require('../controllers/todoControllers');
const router = express.Router();

router.post('/create-to-do', createToDo);
router.get('/get-all-to-do/userId', authenticateToken,getAllToDo);
router.get('/delete-to-do/userId', authenticateToken,deleteToDo);
router.get('/update-to-do/userId', authenticateToken,updateToDo);



module.exports = router;