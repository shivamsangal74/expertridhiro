import { useState, useEffect } from 'react';
import axios from 'axios';
import { url,profileId } from '../Confing.js';


function ItemwiseReport() {
    const [orders, setorders] = useState([]);
    useEffect(async () => {
      let response = await axios.post(`${url}orderitemwisereport`,{profileId:profileId,SaleId:SaleId});
  
      setorders(response.data.Data);
    }, [orders]);

  return (
    <div className='container'>
     <table id="example" className="table table-striped table-bordered" >
        <thead>
            <tr>
                <th>Order No</th>
                <th>Items</th>
                <th>Amount</th>
                <th>Date</th>
                <th>PartyName</th>
                <th>Status</th>
             
            </tr>
        </thead>
        <tbody>
            {
        orders.map(Item1 =>
            <tr>
                <td>{Item1.SaleId}</td>
                <td>{Item1.Items}</td>
                <td>{Item1.TotalAmount}</td>
                <td>{Item1.CreatedDate}</td>
                <td>{Item1.email}</td>
                <td>{Item1.status}</td>
                
            </tr>
        )
}
            </tbody>
    </table>
    </div>
  )
}

export default ItemwiseReport
