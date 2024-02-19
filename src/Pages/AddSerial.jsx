import React, { useState} from 'react';
import axios from 'axios';
import Alert from '../components/Alert.jsx';
import { useSelector } from 'react-redux';
import {url,profileId} from '../Confing.js'

const AddSerial = () => {
  const [name, setname] = useState('');
  const [serial, setserial] = useState('');
  const [mrp, setmrp] = useState('');
  const api = useSelector((state) => state.api)
  const handleserial = async (e) => {
      e.preventDefault();
      try {
        let response =  await axios.post(`${url}saveSerial`, {
          name:name,
          serial:serial,
          mrp:mrp,
          url:'http://totalaquaadvance.com/serial/'+serial,
          profileId:profileId
          });
          alert('Saved');

          
      } catch (error) {
          debugger
              console.log(error.message)
          
      }
  }
  return (
    <>
   <div className="container">
     
 <form className="px-4 py-3"   onSubmit={handleserial}>
   <div className="mb-3">
     <label  className="form-label">Name</label>
     <input type="text" className="form-control" id="name" value={name} onChange={(e) => setname(e.target.value)}  />
   </div>
   <div className="mb-3">
     <label  className="form-label">Serial No</label>
     <input type="text" className="form-control" id="serial" value={serial} onChange={(e) => setserial(e.target.value)}  />
   </div>
   <div className="mb-3">
     <label  className="form-label">MRP</label>
     <input type="text" className="form-control" id="mrp" value={mrp} onChange={(e) => setmrp(e.target.value)}  />
   </div>
   <button className="btn btn-primary">Submit</button>
  
 </form>


</div>
</>
  )
}

export default AddSerial
