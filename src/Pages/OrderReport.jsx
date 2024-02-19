
import axios from 'axios';
import { url,profileId } from '../Confing.js';
import React, {useRef,useState, useEffect } from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';



function OrderReport() {
  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
      currentTableRef: tableRef.current,
      filename: 'SaleReport',
      sheet: 'Users'
  })
    const [orders, setorders] = useState([]);
    useEffect(async () => {
      let response = await axios.post(`${url}orderreport`,{profileId:profileId});
  
      setorders(response.data.Data);
    }, [orders]);

  return (
    <div className='container'>
       <button onClick={onDownload}> Export excel </button>
     <table id="example" className="table table-striped table-bordered" ref={tableRef}>
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
                <td>{Item1.Options}</td>
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

export default OrderReport
