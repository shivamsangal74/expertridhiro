import { useState, useEffect } from 'react';
import axios from 'axios';
import { url,profileId } from '../Confing.js';
import { useSelector, useDispatch } from 'react-redux';
export default function MyOrder(){
  const userid = useSelector((state) => { return state.userId })
  const [Order, setOrder] = useState([]);
  useEffect(async () => {
    debugger
    let response = await axios.post(`${url}myorder`,{profileId:profileId,userid:userid[0]});

    setOrder(response.data.Data)
  }, []);
  

    return (
      <div className='container'>
        {
            Order.map(Item1 =>
              <div className="card">
          
              <div className="card-body">
                <h5 className="card-title">Order No:-{Item1.SaleId} </h5>
                <p className="card-text">Order Placed On {Item1.CreatedDate}</p>
                <p className="card-text">Items:{Item1.Items}</p>
                <p className="card-text">Amount:{Item1.TotalAmount}</p>
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
            )
          }
     
        
      </div>
    )
  
}
