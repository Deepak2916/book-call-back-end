const usercontroller=require('../controllers/usercontroller.js')


const router=require('express').Router()

router.post('/book-call',usercontroller.addUser)

router.get('/book-call',usercontroller.getAllUsers)

router.get('/book-call/:id',usercontroller.getOneUser)

router.delete('/book-call/:ph_number',usercontroller.deleteuser)

module.exports=router