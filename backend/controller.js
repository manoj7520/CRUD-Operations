const express=require('express')
const router=express.Router()
const {  delete_user,upadate_userName,post_userName,get_Data}=require('./model')
const app=express()
//middleware
app.use(express.json())

//routing
router.route('/').get(get_Data)
router.route('/add').post(post_userName)
router.route('/delete/:id').delete(delete_user)
router.route('/update/:id').patch(upadate_userName)

module.exports=router;