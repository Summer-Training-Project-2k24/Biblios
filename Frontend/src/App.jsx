import Landing from "./pages/Landing";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import Footer1 from "./pages/footer1";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Cart from "./components/book/cart";
import BookPage from "./components/book/bookpage";
import NotFound from "./components/book/notfound";
import { useState, useEffect } from 'react';
import { getCart, removeFromCart, changeQuantity } from './components/pages/cartFunction'; 
import { useParams, Link, useHistory } from 'react-router-dom';
import bookService from './components/book/bookservice';
import './components/book/BookPage.css';

import React from 'react';
import {Navigate } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import ForgotPassword from "./components/passwordUpdateForm"
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import { AuthProvider } from './context/AuthContext';
// import PrivateRoute from './components/PrivateRoute';
import MoodReader from "./components/MoodReader";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

function App() {

  return (
  

       <BrowserRouter>
        <MoodReader/>
       <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/footer1" element={<Footer1 />}/>
          
          </Routes> 

          <AuthProvider>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        {/* <Route path="" element={<Navigate to="/login" />} /> */}
      </Routes>
    </AuthProvider>
    </BrowserRouter> 
  
  )
}
const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Simplified auth check
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default App
