import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios'
const Users = () => {
    const [user,setUsers]=useState([])
    const fetchHandler=async(search)=>{
        return  await axios.get(`http://localhost:5000/api/get`)
         .then((res)=>res.data);
     
       }
       useEffect(()=>{
         fetchHandler().then((data)=>setUsers(data.users));
         
       })
       
       
  return (
    <div>
    
      {user.map((item)=>(
        
        <>

         
         
           
            <table className="table table-striped">
  
    <tr>
      <th >Id</th>
      <th >First Name</th>
      <th >Last Name</th>
      <th >Orders</th>
    </tr>
  
  
    <tr>
      <td>{item.id}</td>
      <td>{item.First_name}</td>
      <td>{item.Last_name}</td>
     <td>
     <table>
          <tr>
            <th>Product Name</th>
            <th>Status</th>
            <th>Create Date</th>

          </tr>
          
          <tr>
            <td>{item.Orders[0].Product_name}</td>
            <td>{item.Orders[0].Status}</td>
            <td>{item.Orders[0].Created_date}</td>
          </tr>
          <tr>
            <td>{item.Orders[1].Product_name}</td>
            <td>{item.Orders[1].Status}</td>
            <td>{item.Orders[1].Created_date}</td>
          </tr>
          <tr>
            <td>{item.Orders[2].Product_name}</td>
            <td>{item.Orders[2].Status}</td>
            <td>{item.Orders[2].Created_date}</td>
          </tr>
          
            
        </table>
     </td>
      
      
    </tr>
    
  
</table>


  
         </>
         
        
        
       
      ))}
      
      
    </div>
  )
}

export default Users
