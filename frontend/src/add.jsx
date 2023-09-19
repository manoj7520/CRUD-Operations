import React, {  useState } from 'react'
import './add.css'
import axios from "axios";
import { Link} from 'react-router-dom'
function ADD() {
  const arrow="->"
  const[title,setTitle]=useState('')
  const[description,setDescripption]=useState('')
 const url='http://localhost:5000/'

  const  post_title =(event)=>{
    event.preventDefault()
    console.log({title:title})
    console.log({description:description})
    axios.post('http://localhost:5000/add',{title:title,description:description}).
    then(res=>{console.log(res);
    console.log(title+" "+description)
    })
    .catch(err=> console.log(err.message))
  }
 
  return (
    <div>
        <div className=' bg-secondary' id='cmain1'>
          <h1 id='cheading' style={{color:"white"}}>CRUD-Operations</h1>
          <Link id='aallusers' to='/crud'>{arrow}All users</Link>
        </div>
  <div>
 </div>
 <div id='amain'>
      
      <div id='amain1'>

      </div>
      <div id='amain2'>
      <form action="post" autocomplete="off" onClick={post_title}>
    <fieldset>
<legend><br />
<label for="fname">Title:&nbsp;&nbsp;&nbsp;</label>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<input type="text" id="fname" value={title} onChange={e=>setTitle(e.target.value)}/><br/><br />
<label for="lname">Description:</label>


<input type="text" id="lname" value={description} onChange={e=>setDescripption(e.target.value)} /><br/><br /> 
<button id='abut'><Link to='/crud' style={{textDecoration:"none" ,color:"white"}}>ADD</Link></button></legend>
    </fieldset>
</form>

      </div>
      <div id='amain3'>

      </div>
  </div>
    </div>
   
  )
}

export default ADD