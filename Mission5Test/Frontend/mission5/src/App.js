import './App.css';
// import Result from './result.js';
// import axios from 'axios'
// import useState from 'react'
import PBTLoginPage from './Pages/PBTLoginPage';
import GuestSignIn from './Pages/PBTGuestSignIn'
import HomePage from './Pages/PBTHomePage'
// import ImageSlider from './components/ImageSlider';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
export default function App() {

  return (

    
    <Router>
    <Routes>
    <Route>
        <Route path="/" element={<HomePage />}></Route>
      </Route>
      <Route>
        <Route path="/guestsignin" element={<GuestSignIn />}></Route>
      </Route>
      <Route>
        <Route path="/signin" element={<PBTLoginPage />}></Route>
      </Route>
    </Routes>
  </Router>
  
  
  );
}
