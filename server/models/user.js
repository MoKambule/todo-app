const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  email: { type: String, required:true, unique: true, trim: true, lowercase: true},
  createdAt: { type: Date, default: Date.now }


},{ collection: 'todos' } );
//pre-save middleware to hash password before saving
userSchema.pre("save",async function(next){
    const user = this;

    if(!user.isModified('password')) return next();
    try{
        const salt = await bcrypt.genSalt(8);
        const hash = await bcrypt.hash(user.password,salt);
        
        user.password = hash;
        next();
    }catch (e){
    next(e);}
    
});

userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password,this.password);
}

module.exports = mongoose.model('User', userSchema);

