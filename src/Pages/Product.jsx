import { useLocation } from 'react-router-dom';
import react, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtocart } from '../store/Cart';
import { url } from '../Confing';

export default function Product() {
    const location = useLocation()
    const dispatch = useDispatch()
    const [qty, setqty] = useState(1)
    //store the state in a variable if you want 
    //location.state then the property or object you want

    const itemName = location.state.itemdetail





    return (
        <>


            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                    
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product p-4">

                                        <div className="mt-4 mb-3">
                                            <h5 className="text-uppercase">{itemName.title}</h5>
                                            <div className="price d-flex flex-row align-items-center"> <span className="act-price"> ₹{itemName.price}</span>
                                                <div className="ml-2"><span>₹{itemName.discount}% OFF</span> </div>
                                            </div>
                                        </div>
                                        <p className="about">{itemName.description}.</p>

                                        <div className="cart mt-4 align-items-center">
                                            <button onClick={() => { dispatch(addtocart({ id: itemName.id, title: itemName.title, price: itemName.price, qty: qty })) }} className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>

                                            <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
