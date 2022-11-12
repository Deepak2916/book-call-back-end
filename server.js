const express=require('express')

const body= require('body-parser')
const cors=require('cors')
const app=express()
const db=require('./models/user')
app.use(body.json({extended:false}))

app.use(cors())
app.use(express.json())

const router=require('./routes/userRouter.js')

app.use(router)

// db.sync({force:true})
// .then(()=>{
//     console.log('table created')
// })
// .catch(err=> console.log('it an error'))

app.listen(4000)