const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const toDoSchema = new Schema({
  title: String,
  description: String,
  isCompleted: { type: String, required: true, unique: true, trim: true },
  completion: { type: String, required: true },
  createdB: {ref:"user", type:Schema.ObjectId}
  },
{ timestamps:true

});

const ToDo = mongoose.model("ToDo",toDoSchema);

module.exports = ToDo;