import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Outlet,createBrowserRouter, useLocation, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './components/Login'
import Navbar from './components/Navbar';
import Product from './Pages/Product';
import AddProduct from './Pages/AddProduct';
import Cart from './components/Cart';
import MyOrder from './components/MyOrder';
import OrderReport from './Pages/OrderReport';
import Footer from './components/Footer';
import Alert from './components/Alert';
import AddSerial from './Pages/AddSerial';
import Serial from './Pages/Serial';
import Amc from './components/Amc';


const Layout =()=>{
  const {pathname} =useLocation();
  
  return (
    <div>
   { pathname.includes('serial/') ? '' : <Navbar title="Home" />}
    <Outlet />
   { pathname.includes('serial/') ? '': <Footer />}
    </div>
  )
}

const router = createBrowserRouter([
  {
    
    
    path:'/',
    element : <Layout />,
    children : [
      {
        path: '/login',
        element : <Login />
        
      }, {
        path: '/',
        element : <Home />
        
      },
      {
        path: '/product',
        element : <Product />
        
      },
      {
        path: '/addproduct',
        element : <AddProduct />
        
      },
      {
        path: '/addserial',
        element : <AddSerial />
        
      },
      {
        path: '/home',
        element : <Home />
        
      },
      {
        path: '/cart',
        element : <Cart />
      },
      {
        path: '/mycart',
        element : < MyOrder />
      },
      {
        path: '/amc',
        element : < Amc />
      },
      
      {
        path: '/orderreport',
        element : < OrderReport />
      },
      {
        path: '/alert',
        element : < Alert />
      },
      {
        path: '/serial/:id',
        element : < Serial />
      }
    ]
  }
])

function App() {
  //const {userId,setiserId} = useState('')
 
return (
  <>
  <RouterProvider  router ={router} />
  </>
)
}

export default App;
