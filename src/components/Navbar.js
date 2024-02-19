import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { url, profileId } from '../Confing.js'
import axios from 'axios';
import Cart, { logout } from '../store/Cart';
import { store, persister } from '../store/Store';
import { setuserid, completelogout } from '../store/User'

export default function Navbar(props) {
  const products = useSelector((state) => { return state.cart.products })
  const navigate = useNavigate()
  let logbutton = 'login'
  const ref = useRef(null)
  const refClose = useRef(null)
  const _userid = useDispatch();
  const userid = useSelector((state) => { return state.userId })
  debugger
  if (userid.length != 0) {
    logbutton = 'logout'
  }
  function logouthdle() {
    if (logbutton == 'logout') {
      persister.purge();
      _userid(logout());
      _userid(completelogout())
      navigate('/')
    } else {
      ref.current.click();
    }


  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      let response = await axios.post(`${url}login`, {
        email: email,
        password: password,
        profileId: profileId
      });
      _userid(setuserid(response.data.userid))
      refClose.current.click();
    } catch (error) {

      console.log(error.message)

    }
  }
  return (
    <>
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="px-4 py-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button className="btn btn-primary">Sign in</button>

              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg  " style={{ backgroundColor: "lavender" }}>
        <div className="container-fluid">
          < Link className="navbar-brand" to="/home">{props.title}</Link>

          <div onClick={() => { navigate('/cart') }}> <i className='fas fa-shopping-cart'></i> <span >{products.length}</span></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">{props.tittle}</Link>
              </li>
              {
                userid.length != 0 && userid[0] == 1 &&
                <li className="nav-item" >
                  <Link className="nav-link" aria-current="page" to="/addproduct">Add Product</Link>
                </li>


              }
              {
                userid.length != 0 && userid[0] == 1 &&
                <li className="nav-item" >
                  <Link className="nav-link" aria-current="page" to="/orderreport">Order Report</Link>
                </li>
              }
              {
                userid.length != 0 && userid[0] == 1 &&
                <li className="nav-item" >
                  <Link className="nav-link" aria-current="page" to="/addserial">Add serial</Link>
                </li>
              }
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/mycart">My Order</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/amc">AMC Plan</Link>
              </li>
              {/* <li className="nav-item">
            <Link className="nav-link" to="/booking">Book WorkStation</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/workstation">Add WorkStation</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Workstationlist">WorkStation List</Link>
          </li> */}

            </ul>
            <button className="btn btn-outline-success" onClick={logouthdle} >{logbutton}</button>

          </div>
        </div>
      </nav>

    </>
  )
}
