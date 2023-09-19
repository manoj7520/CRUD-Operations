import React, { useState } from 'react'
import './edit.css'
import { Link ,useParams } from 'react-router-dom'
import axios from 'axios'

function EDIT() {
  const arrow="->"
  const[name1,setName1]=useState('')
  const[name2,setName2]=useState('')
  const {id}=useParams()
  
    
  const edit_user=axios({
    method:'put',
     url:`http://localhost:5000/update/${id}`,
      data:{
        title:name1,
        description:name2
      },
  });

  return (
   <div>
     <div className=' bg-secondary' id='emain1'>
          <h1 id='cheading' style={{color:"white"}}>CRUD-Operations</h1>
          <Link id='eallusers' to='/crud'>{arrow}All users</Link>
        </div>
    <div id='emain'>
    <div id='emain1'>
    </div>
    <div id='emain2'>
    <form autocomplete="off" onClick={()=>edit_user}>
  <fieldset>
<legend><br />
<label for="fname">Title:&nbsp;&nbsp;&nbsp;</label>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" id="fname" value={name1} onChange={e=>setName1(e.target.value)}/><br/><br />
<label for="lname">Description:</label>
<input type="text" id="lname" value={name2} onChange={e=>setName2(e.target.value)}/><br/><br /> 
<button  id='ubut'><Link to='/crud' style={{textDecoration:"none" ,color:"white"}} >Update</Link></button></legend>
  </fieldset>
</form>

    </div>
    <div id='emain3'>

    </div>
</div>
   </div>
  )
}

export default EDIT