import Landing from "./pages/Landing";
import AboutUs from "./pages/Aboutus";
<<<<<<< HEAD
import ContactUs from "./pages/Contactus";
import Footer1 from "./pages/Footer1";
=======
import ContactUs from "./pages/contactus";
import Footer1 from "./pages/footer1";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Cart from "./components/book/cart";
import BookPage from "./components/book/bookpage";
import NotFound from "./components/book/notfound";
import { useState, useEffect } from 'react';
import { getCart, removeFromCart, changeQuantity } from './pages/cartFunction'; 
import { useParams, Link, useHistory } from 'react-router-dom';
import bookService from './components/book/bookservice';
>>>>>>> 14d1b06164b399399ac0ae76dab5f4a6120430d6

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import ForgotPassword from "./components/passwordUpdateForm"
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import { AuthProvider } from './context/AuthContext';
// import PrivateRoute from './components/PrivateRoute';
import MoodReader from "./components/MoodReader";
import "./App.css"

function App() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Example function that navigates programmatically
  const goToHomePage = () => {
    navigate('/'); // Use navigate with the path as argument
  };

  return (
<<<<<<< HEAD
// <<<<<<< HEAD
// =======
  
// >>>>>>> signinsignupfrontend
=======
  
>>>>>>> 14d1b06164b399399ac0ae76dab5f4a6120430d6

       <BrowserRouter>
        <MoodReader/>
       <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/footer1" element={<Footer1 />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/book" element={<BookPage/>}/>
          {/* <Route path="/book/:id" element={<BookPage/>}/> */}
          <Route path="/notfound" element={<NotFound visible={true} notFoundMessage="Page Not Found" resetLinkText="Back To Homepage" />} />
                    
          </Routes> 

          <AuthProvider>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
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
