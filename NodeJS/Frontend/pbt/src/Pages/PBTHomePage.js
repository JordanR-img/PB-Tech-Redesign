import React from "react";
import TopNav from "../components/TopNavHomePage";
import BottomNav from "../components/BottomNavHomePage";
import Carousel from "../components/CarouselHomePage";
import MainContent from "../components/MainContentHomePage";
import SecondNav from '../components/SecondNavHomePage';
import SignInModal from "../components/SignInModal";
import Login from '../components/login'
import Register from '../components/register'

export default function PBTHomePage() {
  return ( 
  <div>
    <header><TopNav /></header>
    <header><SecondNav /></header>
    <div><Carousel /></div>
    {/* <main><MainContent /></main> */}
    {/* <SignInModal /> */}
    {/* <Login />

    <Register /> */}
    {/* <footer><BottomNav /></footer> */}
  </div>
  )
}
