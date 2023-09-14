const mongoose=require('mongoose')

const listschemma = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
})


module.exports=mongoose.model('crud', listschemma);