const listschemma=require('./schemma')

const get_Data=('/',async(req,res)=>{
    const saved_data=await listschemma.find()
    return res.status(200).json(saved_data)
})

const post_userName=('/',async(req,res)=>{
    try{
        const repeated_data=await listschemma.findOne({username:req.body.username})
        if(repeated_data){
         return  res.json("same data already given");
        }
        const user_data=new listschemma({username:req.body.username})
        const saved_data=await user_data.save()
        res.json(saved_data)
    }
    catch(error){
        res.status(500).json(error.message)
    }
})

const upadate_userName=('/',async(req,res)=>{
    try{
        const userIds=req.params.id;
        const updatedData=req.body;
        const UpdatedItem=await listschemma.findByIdAndUpdate(userIds,updatedData,{
            new:true
        });
        if (!UpdatedItem) {
            return res.status(404).json({ message: 'Item not found' });
          }
        res.json(UpdatedItem)
    }
    catch(error){
      return  res.status(500).json(error.message)
    }
})

const delete_user=('/',async(req,res)=>{
    try{
        const userId=req.params.id
        console.log(req)
    const delete_User=await listschemma.findByIdAndDelete(userId)
    return res.status(200).json("data deleted succesfully")
    if (!deletedata) {
       return res.status(404).json({ error: 'Data not found.' });
     }
    }
    catch(err){
        return res.status(500).json(err.mesaage) 
    }
})
module.exports={
    delete_user,
    upadate_userName,
    post_userName,
    get_Data
}
