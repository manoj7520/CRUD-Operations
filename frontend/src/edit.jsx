import React from 'react'
import './edit.css'
import { Link } from 'react-router-dom'

function EDIT() {
  return (
    <div id='emain'>
    <div id='emain1'>
    </div>
    <div id='emain2'>
    <form action="post">
  <fieldset>
<legend><br />
<label for="fname">Title:&nbsp;</label>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" id="fname" name="fname"/><br/><br />
<label for="lname">Description:</label>
<input type="text" id="lname" name="lname"/><br/><br /> 
<button><Link to='/crud' style={{textDecoration:"none" ,color:"white"}}>Update</Link></button></legend>
  </fieldset>
</form>

    </div>
    <div id='emain3'>

    </div>
</div>
  )
}

export default EDIT