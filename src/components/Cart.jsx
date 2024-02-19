import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removetocart, logout } from '../store/Cart';
import { url, profileId } from '../Confing.js'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate()
  const [shippingaddress, setshippingaddress] = useState('');
  const userid = useSelector((state) => { return state.userId })
  const dispatch = useDispatch()
  const products = useSelector((state) => { return state.cart.products })
  var total = 0;
  products.map(product =>
    total += product.price * product.qty
  )

  const deleteNote = (item) => {
    dispatch(
      removetocart({ id: item.id }))
  }
  async function checkout() {
    if (userid.length == 0) {
      alert('Please login first....')
    }
    else {
      try {

        let response = await axios.post(`${url}checkout`, {
          PartyId: userid[0],
          DocNo: 27,
          TotalAmount: total,
          discount: 0,
          SubTotal: total,
          taxamount: 0,
          billtype: 'online',
          status: 'pending',
          shippingcharge: 0,
          shippingaddress: shippingaddress,
          items: products,
          profileId: profileId
        });

        dispatch(logout())
        alert('Your order is placed, Order No--' + response.data.SaleId);
        navigate('/home')

      } catch (error) {

        console.log(error.message)

      }
    }
  }


  return (
    <>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">


                  <div className="row">
                    <div className="col-md-8">
                      <div className="row">
                        <h5 className="mb-3"><a href="#!" className="text-body"><i
                          className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>


                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <p className="mb-0">You have {products.length} items in your cart</p>
                          </div>

                        </div>

                        {
                          products.map(product =>

                            <div className="col-md-3" key={product.id}>
                              <div className="card my-3">
                                <div className="card-body">
                                  <div className="d-flex align-items-center">
                                    <h5 className="card-title">{product.title}</h5>

                                    <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(product) }}></i>
                                    {/* <i className="far fa-edit mx-2" onClick={() => { updateNote(workstation1) }}></i> */}
                                  </div>
                                  <p className="card-text"> Price: {product.price}</p>
                                  <p className="card-text"> Qty: {product.qty}</p>

                                </div>
                              </div>
                            </div>

                          )

                        }
                      </div>
                    </div>
                    <div className="col-md-4">

                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Shipping Address</h5>
                          </div>
                          <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                              <input type="text" id="shippingaddress" value={shippingaddress} onChange={(e) => setshippingaddress(e.target.value)} className="form-control form-control-lg"
                                placeholder="Enter Shipping Address" />

                            </div>

                            <div className="form-outline form-white mb-4">
                              <input type="number" id="typeText" className="form-control form-control-lg" siez="10"
                                placeholder="Enter MobileNo" />

                            </div>

                            {/* <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="text" id="typeExp" className="form-control form-control-lg"
                                    placeholder="MM/YYYY" size="7" minLength="7" maxLength="7" />
                                  <label className="form-label" htmlFor="typeExp">Expiration</label>
                                </div>
                              </div> */}
                            {/* <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="password" id="typeText" className="form-control form-control-lg"
                                    placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                                  <label className="form-label" htmlFor="typeText">Cvv</label>
                                </div>
                              </div> */}
                            {/* </div> */}

                          </form>



                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">${total}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">GST</p>
                            <p className="mb-2">$0.00</p>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">${total}</p>
                          </div>

                          <button type="button" className="btn btn-info btn-block btn-lg">
                            <div className="d-flex justify-content-between" onClick={checkout}>
                              {/* <span>${total}</span> */}
                              <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                            </div>
                          </button>

                        </div>
                      </div>

                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
