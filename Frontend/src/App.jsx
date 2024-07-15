import Landing from "./pages/Landing"
import About from "./pages/Aboutus"
import ContactUs from "./pages/contactus"

import React from 'react';
import {Navigate } from 'react-router-dom';
import SignupForm from './components/SignupForm';

import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import { AuthProvider } from './context/AuthContext';
// import PrivateRoute from './components/PrivateRoute';



import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

function App() {

  return (
<<<<<<< HEAD
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
=======
   
>>>>>>> signinsignupfrontend

       <BrowserRouter>
       <Routes>
          <Route path="/" element={<Landing />} />
          </Routes> 

          <AuthProvider>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/login" />} />
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
