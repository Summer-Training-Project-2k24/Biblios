import Landing from "./pages/Landing"

import React from 'react';
import {Navigate } from 'react-router-dom';
import SignupForm from './components/SignupForm';

import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';



import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

function App() {

  return (
   

       <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Landing />} />
          </Routes> */}
      

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


export default App
