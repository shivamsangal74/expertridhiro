import react, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addtocart } from '../store/Cart';
import { url } from '../Confing';

export default function Item({ item }) {
  const dispatch = useDispatch()
  const [qty, setqty] = useState(1)
  return (
    <div className="col-md-4 mb-4">
      <div key={item.id} className="card text-center h-80 border-0 box-shadow"><img className="card-img-top" src={url +'uploads/'+ item.item_image} style={{ height: "250px" }} />
        <div className="card-body">
          <h5 className="card-title"><Link to='/product' state={{ itemdetail: item }}>{item.title}</Link></h5>
          <p className="card-text">  <span className="text-muted text-decoration-line-through">₹{item.price}</span>  ₹{item.price - item.discount}</p>
          <div className="card-footer bg-white px-0">
            <div className="btn-group btn-group-sm"><a className="btn btn-outline-secondary" onClick={() => { dispatch(addtocart({ id: item.id, title: item.title, price: item.price - item.discount, qty: qty })) }}>Add to cart</a>

            </div>
          </div>
        </div>
      </div>

    </div>


  )
}
