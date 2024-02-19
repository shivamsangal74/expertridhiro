import React, { useState} from 'react';
import axios from 'axios';
import Alert from '../components/Alert.jsx';
import { useSelector } from 'react-redux';
import {url,profileId} from '../Confing.js'

const AddProduct = () => {
  const [Title, setTitle] = useState('');
  const [price, setprice] = useState('');

  const [discount, setdiscount] = useState('');
  const [Qty, setQty] = useState('');
  const [brand, setbrand] = useState('');
  const [category, setcategory] = useState('');
  const [Active, setActive] = useState('');
  const [description, setdescription] = useState('');
  const [item_image, setitem_image] = useState('');
  


  const userid = useSelector((state) => state.userId)
 
  const api = useSelector((state) => state.api)

  const handleworkstation = async (e) => {
      e.preventDefault();
      try {
        let response =  await axios.post(`${url}saveItem`, {
          Title:Title,
          price: price,
          discount: discount,
          Qty:Qty,
          brand :brand,
          category:category,
          Active:Active,
          description:description,
          item_image:item_image?item_image.name:'',
          profileId:profileId
          });
          if (item_image) {
            const url1 = `${url}upload`; // Replace with your Node.js server URL
      
            // Create a new FormData object and append the file to it
            const formData = new FormData();
            formData.append('file', item_image);
      
            // Make a POST request using fetch
            fetch(url1, {
              method: 'POST',
              body: formData,
            })
              .then(response => response.json())
              .then(data => {
                console.log('File uploaded successfully:', data);
              })
              .catch(error => {
                console.error('Error uploading file:', error);
              });
          }
          alert('product add successfully')
          

          
      } catch (error) {
          debugger
              console.log(error.message)
          
      }
  }

  const handleFileChange = (e) => {
   
    setitem_image(e.target.files[0]);
  }
  return (
    <>
   <div className="container">
     
 <form className="px-4 py-3"   onSubmit={handleworkstation}>
   <div className="mb-3">
     <label  className="form-label">Name</label>
     <input type="text" className="form-control" id="name" value={Title} onChange={(e) => setTitle(e.target.value)}  />
   </div>
   <div className="mb-3">
     <label  className="form-label">Price</label>
     <input type="number" className="form-control"  value={price} onChange={(e) => setprice(e.target.value)}/>
   </div>
   <div className="mb-3">
     <label  className="form-label">Discount</label>
     <input type="number" className="form-control"  value={discount} onChange={(e) => setdiscount(e.target.value)}/>
   </div>
   <div className="mb-3">
     <label  className="form-label">Qty</label>
     <input type="number" className="form-control"  value={Qty} onChange={(e) => setQty(e.target.value)}/>
   </div>
   <div className="mb-3">
     <label  className="form-label">Brand</label>
     <input type="text" className="form-control"  value={brand} onChange={(e) => setbrand(e.target.value)}/>
   </div>
   <div className="mb-3">
     <label  className="form-label">Category</label>
     <input type="text" className="form-control"  value={category} onChange={(e) => setcategory(e.target.value)}/>
   </div>
   <div className="mb-3">
     <label  className="form-label">Description</label>
     <input type="text" className="form-control"  value={description} onChange={(e) => setdescription(e.target.value)}/>
   </div>

   <div className="mb-3">
     <label  className="form-label">Image</label>
     <input type="file" className="form-control" onChange={handleFileChange}/>
   </div>


   
   <button className="btn btn-primary">Submit</button>
  
 </form>


</div>
</>
  )
}

export default AddProduct
