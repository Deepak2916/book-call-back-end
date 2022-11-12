// const { where } = require('sequelize')
const { Error } = require('sequelize')
const user=require('../models/user')

const addUser=async (req,res)=>{
    let info={
        name:req.body.name,
        email:req.body.email,
        ph_number:req.body.ph_number

    }
try{
    const product=await user.create(info)
    res.status(200).json(product)
}
catch{
    console.log('error at add-user')
}

}

const getAllUsers=async (req,res)=>{
    try{
    let users=await user.findAll()
    res.status(200).json(users)
    }
    catch{
        console.log('error at get all users')
    }
}

const getOneUser= async (req,res)=>{
    try{
    let id=req.params.id
    let users=await user.findAll({where:{id:id}})
    res.status(200).json(users)
    }
    catch{
        console.log('error at get one user')
    }
}

const deleteuser=async(req,res)=>{
    try{
        let number=req.body.ph_number
      await user.destroy({where:{ph_number:number}})
        res.status(200).send('deleted')
    }
    catch{
        console.log(Error)
    }
}


module.exports={addUser,getAllUsers,getOneUser,deleteuser}
