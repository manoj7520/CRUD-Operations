const express=require('express')
const router=express.Router()
const {  delete_user,upadate_userName,post_userName,get_Data,get_user}=require('./model')
const app=express()
//middleware
app.use(express.json())

//routing
router.route('/').get(get_Data)
router.route('/:id').get(get_user)
router.route('/add').post(post_userName)
router.route('/delete/:id').delete(delete_user)
router.route('/update/:id').put(upadate_userName)

module.exports=router;