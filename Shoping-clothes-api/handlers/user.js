const User = require('../models/user');
const userSchema = require('../models/user');

const getAllusers = async (req,res) => {
       try {
           const userDB =  await userSchema.find();
           console.log(userDB);
           res.status(200).json(userDB);
       } catch (error) {
        console.log(error);
        res.status(400).send(error);
       }
}

const  postUser = async (req,res) => {
    // por body
    try {
        const user = new User({
             name : req.body.name,
             email: req.body.email, 
             password : req.body.password
        })
        await user.save();
        res.status(200).json(user);

    } catch (error) {
        res.status(400).send("error  al crear")
    }
}
module.exports = {
    getAllusers,
    postUser,
}