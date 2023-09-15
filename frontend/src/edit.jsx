import React, { useEffect, useState } from 'react'
import './edit.css'
import { Link ,useParams } from 'react-router-dom'
import axios from 'axios'

function EDIT() {
  
  const[put,setPut]=useState('') 
  const {id}=useParams()
  
  const get_user=async()=>{ 
     return axios.get(`http://localhost:5000/${id}`)
     .then(res =>{ 
      const updatedData = (res.data);
      setPut(updatedData);
      })
    .catch(error => console.error('Error while getting user ID:', error ));
  }
    
  const edit_user=async(id)=>{
     await axios.put(`http://localhost:5000/update/${id}`,{put:put.title})
      .then(res =>{ 
        setPut(res.data)
        console.log(`http://localhost:5000/update/${id}`)
        console.log(id)
        console.log(res.data)})
      .catch(error => console.error('Error while updating:', error ));
  }

  edit_user(id)
  get_user()   
  // useEffect(()=>{
  //   edit_user(id)
  // },[0])

  return (
    <div id='emain'>
    <div id='emain1'>
    </div>
    <div id='emain2'>
    <form >
  <fieldset>
<legend><br />
<label for="fname">Title:&nbsp;</label>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" id="fname" value={put.title} onChange={e=>setPut(e.target.value)}/><br/><br />
<label for="lname">Description:</label>
<input type="text" id="lname" value={put.description} onChange={e=>setPut(e.target.value)}/><br/><br /> 
<button><Link to='/crud' style={{textDecoration:"none" ,color:"white"}} >Update</Link></button></legend>
  </fieldset>
</form>

    </div>
    <div id='emain3'>

    </div>
</div>
  )
}

export default EDIT