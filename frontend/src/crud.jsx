import React, { useEffect, useState } from 'react'
import './crud.css'
import { Link, useNavigate } from 'react-router-dom'
import ADD from './add'
import axios from 'axios'
import EDIT from './edit'
function CRUD() {
  
   const [inputdata,setInputdata]=useState([])

   const updateInputData=(value)=>{
    const updatedData=[...inputdata].concat(value);
    console.log(inputdata)
    setInputdata(updatedData)
  }

  

  const handleDeleteTodo = (id) => {
    console.log("manoj")
    console.log(id);
    axios.delete(`http://localhost:5000/delete/${id}`)
      .then(res =>{ 
        const updatedData = inputdata.filter(m => m._id !== id);
        setInputdata(updatedData);
        console.log(id) })
      .catch(error => console.error('Error deleting todo:', error ));
  };
  
  useEffect(()=>{
    axios.get('http://localhost:5000/').
    then(res=>{console.log(res);
    setInputdata(res.data)
    updateInputData(res.data)
    })
    .catch(err=> console.log(err))
  },[0])

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

  </tr>
  {inputdata.map(data =>(
  <tr key={data._id}>
          <td id='cinput1'>
           {data.title}
          </td>
          <td id='cinput2'>
          {data.description}
          </td>
          <td>
    &nbsp;<button id='cupdate'><Link style={{textDecoration:"none" ,color:"white"}} to={`/edit/${data._id}`} >Update</Link></button>&nbsp;&nbsp;
    <button id='cdelete' style={{color:"white"}} onClick={()=>handleDeleteTodo(data._id)}>Delete</button>
    </td>
              <hr></hr>       
  </tr>
            ))} 
</table>
        </div>
    </div>
  )
}

export default CRUD