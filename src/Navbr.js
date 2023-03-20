import React,{useState} from 'react';
import { Json } from 'react-router-dom';
 
 function Navbr( props) {

  const[userList,setuserList] =useState({})

  const handleSubmit =(event) => {
    event.preventDefault();
    const data= new FormData(event.target);
    const email = data.get('email');
    const password = data.get('password');
    let newState = {... userList ,[email]:password}
    setuserList(newState);
  }
    return (
     <div>

      userList : {JSON.stringify(userList)}
      <h1>Register</h1>
      <form onSubmit =  {' Handlesubmit' } autoComplete="off">
        <label>Email</label>
        <input type="text" name="email"placeholder='email'></input><br></br>
        <input type="text"name="password" placeholder='password'></input><br></br>
        <button type="submit"> submit</button>
      </form>
     </div>
   )
 }
 export default Navbr;
 


