import React, { useState } from 'react'
import './add.css'
import { Link } from 'react-router-dom'
function ADD(props) {
  const[user,setUser]=useState('')
  // const post_user=async()={
  //   axios.post('/',)
  // }

  return (
    <div id='amain'>
        <div id='amain1'>

        </div>
        <div id='amain2'>
        <form action="post">
      <fieldset>
  <legend><br />
  <label for="fname">Title:&nbsp;</label>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="text" id="fname" name="fname"/><br/><br />
  <label for="lname">Description:</label>
  <input type="text" id="lname" name="lname"/><br/><br /> 
  <button><Link to='/crud' style={{textDecoration:"none" ,color:"white"}}>ADD</Link></button></legend>
      </fieldset>
</form>

        </div>
        <div id='amain3'>

        </div>
    </div>
  )
}

export default ADD