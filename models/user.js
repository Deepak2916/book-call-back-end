// const Sequelize = require('sequelize');
const sequelize=require('../utill/database')
const Sequelize=require('sequelize')
// const sequelize=new Sequelize('book','root','Deepak@123',{
//     dialect:'mysql',
//     host:'localhost'
// })

const User=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey: true
    },
    name:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,

        
    },
    email:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
       
    },
    ph_number:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
    }
},{timestamps:false});

module.exports=User

// User.sync()
// .then(()=>{
//     console.log('table created')
// })
// .catch(err=> console.log('it an error'))
