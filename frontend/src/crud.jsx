import React from 'react'
import './crud.css'
import { Link } from 'react-router-dom'

function CRUD() {

  return (
    <div>
        <div className=' bg-secondary' id='cmain1'>
          <h1 id='cheading' style={{color:"white"}}>CRUD-Operations</h1>
        </div>
        <div id='cmain2'>
          <div className='container-fluid' id='cmain3'>
          <h4 style={{textDecoration:"underline"}}>Add data</h4> 
          <button id='cadd'><Link style={{textDecoration:"none" ,color:"white"}} to="/add" >ADD</Link></button>
          </div>
  <table>
  <tr>
    <th>Tile</th>
    <th>Descripition</th>
    <th>Action</th>
  </tr>
  <tr>
    <td id='cinput1'></td>
    <td id='cinput2'></td>
    <td>
    &nbsp;<button id='cupdate'><Link style={{textDecoration:"none" ,color:"white"}} to="/edit">Update</Link></button>&nbsp;&nbsp;
    <button id='cdelete' style={{color:"white"}}>Delete</button>
    </td>
  </tr>
</table>
        </div>
    </div>
  )
}

export default CRUD