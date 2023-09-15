const mongoose=require('mongoose')

const listschemma = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})


module.exports=mongoose.model('crud', listschemma);