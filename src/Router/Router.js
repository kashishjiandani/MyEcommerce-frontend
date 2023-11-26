import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Header from "../components/Common/Header";
import Navbar from "../components/Common/Navbar";
import Menubar from "../components/Common/Menubar";
import Sidebar from "../components/Common/Sidebar";
import Footer from "../components/Common/Footer";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Profile from "../pages/Profile";
import Checkout from "../pages/Checkout";
import OrderComplete from "../pages/OrderComplete";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EditProfile from "../pages/EditProfile";
import EditAddress from "../pages/EditAddress";
import EditPassword from "../pages/EditPassword";
import AddProduct from "../pages/Admin/AddProduct";


function router() {


  return (
    <>
      <Router>
      <Header />
      <Navbar />
      <Menubar />
      <Sidebar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile/account/edit" element={<EditProfile/>}/>
        <Route path="/profile/address/edit" element={<EditAddress/>}/>
        <Route path="/profile/password/edit" element={<EditPassword/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/order-complete" element={<OrderComplete/>}/>



        <Route path="/add" element={<AddProduct/>}/>


        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default router;