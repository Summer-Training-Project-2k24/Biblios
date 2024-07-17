import Landing from "./pages/Landing";
import AboutUs from "./pages/Aboutus";
import ContactUs from "./pages/contactus";
import Footer1 from "./pages/footer1";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import { useState, useEffect } from 'react';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import ForgotPassword from "./components/passwordUpdateForm"
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import { AuthProvider } from './context/AuthContext';
// import PrivateRoute from './components/PrivateRoute';
import MoodReader from "./components/MoodReader";
import "./App.css"

function App() {
  // const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Example function that navigates programmatically
  const goToHomePage = () => {
    navigate('/'); // Use navigate with the path as argument
  };

  return (
  

       <BrowserRouter>
        <MoodReader/>
       <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/footer1" element={<Footer1 />}/>   
          </Routes> 

          <AuthProvider>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={<LoginForm />} />
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


// import Landing from "./pages/Landing";
// import AboutUs from "./pages/Aboutus";
// import ContactUs from "./pages/contactus";
// import Footer1 from "./pages/footer1";
// import Navbar from "./components/Navbar";
// import Slider from "./components/Slider";
// import Categories from "./components/Categories";
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// import SignupForm from './components/SignupForm';
// import ForgotPassword from "./components/passwordUpdateForm";
// import LoginForm from './components/LoginForm';
// import Profile from './components/Profile';
// import { AuthProvider } from './context/AuthContext';
// import MoodReader from "./components/MoodReader";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <MainContent />
//       </AuthProvider>
//     </Router>
//   );
// }

// function MainContent() {
//   const navigate = useNavigate(); // Use useNavigate within a component that is inside Router

//   // Example function that navigates programmatically
//   const goToHomePage = () => {
//     navigate('/'); // Use navigate with the path as argument
//   };

//   return (
//     <>
//       <MoodReader />
//       <Routes>
//         <Route path="/landing" element={<Landing />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/footer1" element={<Footer1 />} />
//         <Route path="/signup" element={<LoginForm />} />
//         <Route path="/" element={<LoginForm />} />
//         <Route path="/forgotpassword" element={<ForgotPassword />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </>
//   );
// }

// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = !!localStorage.getItem('token'); // Simplified auth check
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default App;
