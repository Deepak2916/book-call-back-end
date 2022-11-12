const Sequelize=require('sequelize')
const sequelize=new Sequelize('book','root','Deepak@123',{
    dialect:'mysql'
})
module.exports=sequelize