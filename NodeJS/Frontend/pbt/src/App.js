import './App.css';
import Result from './result.js';
import axios from 'axios'
import useState from 'react'
// import PBTHomePage from './Pages/PBTHomePage.js';
import PBTLoginPage from './Pages/PBTLoginPage';
import GuestSignIn from './Pages/PBTGuestSignIn'
import ImageSlider from './components/ImageSlider';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
// import ReactDOM from "react-dom/client";
export default function App() {

      {/* <PBTLoginPage /> */}
    {/* <GuestSignIn /> */}

      {/* <PBTHomePage /> */}
{/* <ImageSlider /> */}
      {/* <Result /> */}

  return (

    
    <Router>
    <Routes>
      <Route>
        <Route path="/" element={<GuestSignIn />}></Route>
      </Route>
      <Route>
        <Route path="/signin" element={<PBTLoginPage />}></Route>
      </Route>
    </Routes>
  </Router>
  
  
  );
}
