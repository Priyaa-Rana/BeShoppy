import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import Cart from './pages/Cart/Cart';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import NoPage from './pages/Nopage/NoPage';
import MyState from './context/data/MyState';
import Login from './pages/Registration/Login';
import Signup from './pages/Registration/SignUp';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import AddProduct from './pages/Admin/Page/AddProduct';
import UpdateProduct from './pages/Admin/Page/UpdateProduct';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/order" element={
          <ProtectedRoute>
            <Order/>
          </ProtectedRoute>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/dashboard" element={
          <ProtectedRouteAdmin>
            <Dashboard/>
          </ProtectedRouteAdmin>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
          <Route path="/*" element={<NoPage/>} />
        </Routes>
      </Router>
   </MyState>
    
  )
}

export default App

export const ProtectedRoute = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRouteAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'prinkit2002@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}