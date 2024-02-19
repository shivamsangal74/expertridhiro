

import React, { useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {url,profileId} from '../Confing.js'
import { useDispatch } from 'react-redux'

 import {setuserid} from '../store/User'
export default function Login(props) {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    const userid = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
         
          let response =  await axios.post(`${url}login`, {
                email: email,
                password: password,
                profileId:profileId
            });
           debugger
            props.showAlert("Dark mode has been enabled", "success")
           
            userid(setuserid(response.data.userid))
            //localStorage.setItem("userProfile", JSON.stringify(response.data));
         
            history('/home',{state : 'home'})
        } catch (error) {
            debugger
                console.log(error.message)
            
        }
    }
  return (

<div className="container">
<Alert alert={alert}/>
  <form className="px-4 py-3"   onSubmit={handleSubmit}>
    <div className="mb-3">
      <label  className="form-label">Email address</label>
      <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="email@example.com"/>
    </div>
    <div className="mb-3">
      <label  className="form-label">Password</label>
      <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <div className="mb-3">
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
        <label className="form-check-label" >
          Remember me
        </label>
      </div>
    </div>
    <button className="btn btn-primary">Sign in</button>
   
  </form>


</div>
  )
}
