import React, { useEffect, useState } from 'react'
import './edit.css'
import { Link ,useParams } from 'react-router-dom'
import axios from 'axios'

function EDIT() {
  const[name1,setName1]=useState('')
  const[name2,setName2]=useState('')
  const {id}=useParams()
  
  const get_user=async()=>{ 
     return axios.get(`http://localhost:5000/${id}`)
     .then(res =>{ 
      const updatedData = (res.data);

      })
    .catch(error => console.error('Error while getting user ID:', error ));
  }
    
  const edit_user=axios({
    method:'put',
     url:`http://localhost:5000/update/${id}`,
      data:{
        title:name1,
        description:name2
      }
  });
  
  
  useEffect(()=>{
    get_user()  
    axios.get('http://localhost:5000/').
    then(res=>{console.log(res);
      
    })
    .catch(err=> console.log(err))
  },[0])

  return (
    <div id='emain'>
    <div id='emain1'>
    </div>
    <div id='emain2'>
    <form onClick={()=>edit_user}>
  <fieldset>
<legend><br />
<label for="fname">Title:&nbsp;</label>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" id="fname" value={name1.title} onChange={e=>setName1(e.target.value)}/><br/><br />
<label for="lname">Description:</label>
<input type="text" id="lname" value={name2.description} onChange={e=>setName2(e.target.value)}/><br/><br /> 
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