const express = require('express')
const router = express.Router();
require('../db/conn')
const User = require('../models/userSchema')


// router.get('/' , (req , res)=>{
//     res.send('connected');
// });

// router.post('/register' , (req , res)=>{
//     const { Name, Lastname, Email, City, State, Zip } = req.body;

//     if (!Name || !Lastname || !Email || !City || !State || !Zip) {
//         return res.status(422).json({error:"please fill all"})
//     }
//     User.findOne({Email:Email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"email alreadyExist"})
//         }

//         const user =new User({ Name, Lastname, Email, City, State, Zip })

//         user.save().then(()=>{
//             res.status(201).json({message:"user regis successful"})
//         }).catch((err)=> res.status(500).json({error:"failed to register"}))

//     }).catch(err=>console.log(err))
   


// });

//Create  user data===================================================================


router.post('/register' , async (req , res)=>{
    const { Name, Lastname, Email, City, State, Zip } = req.body;

    if (!Name || !Lastname || !Email || !City || !State || !Zip) {
        return res.status(422).json({message:"please fill all the fields"})
    }

    try{

        const userExist = await User.findOne({Email:Email});

        if(userExist){
            return res.status(422).json({message:"email alreadyExist"})
        }

        const user =new User({ Name, Lastname, Email, City, State, Zip })

        userRegister = await user.save();

        if(userRegister){
            res.status(201).json({message:"user regis successful"})
        }
        else{
            res.status(500).json({message:"failed to register"})
        }
    }
    catch(err){console.log(err) }

    
});

// get/Read user data===================================================================

router.get('/users' , async (req , res)=>{

    try{

        const usersAll = await User.find();
        res.status(201).json(usersAll)

    }
    catch(err){ res.status(500).json({message:"failed to register"})}
});


// get user data by id ===================================================================

router.get('/user/:id' , async (req , res)=>{

    try{
        const {id} = req.params
    
        const user = await User.findById({_id:id});
        res.status(201).json(user)

    }
    catch(err){ res.status(500).json({message:"User not Found"})}
});

// Put /Patch user by id and update  data===================================================================

router.patch('/updateUser/:id' , async (req , res)=>{

    try{
        const {id} = req.params
    
        const updateduser = await User.findByIdAndUpdate(id, req.body,{
            new:true
        });
        
        res.status(201).json({message:"user updated"})

    }
    catch(err){ res.status(500).json({message:"User not Found"})}
});

// Delete user by id and update  data===================================================================

router.delete('/deleteUser/:id' , async (req , res)=>{

    try{
        const {id} = req.params
    
        const Deleteuser = await User.findByIdAndDelete(id);
        
        res.status(201).json({message:"user Removed"})

    }
    catch(err){ res.status(500).json({message:"User not Found"})}
});



module.exports = router;
