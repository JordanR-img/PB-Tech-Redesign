import React from "react";
import TopNav from "../components/TopNavHomePage";
import BottomNav from "../components/BottomNavHomePage";
import Carousel from "../components/CarouselHomePage";
import MainContent from "../components/MainContentHomePage";
import SecondNav from '../components/SecondNavHomePage';
export default function PBTHomePage() {
  return ( 
  <div>
    <header><TopNav /></header>
    <header><SecondNav /></header>
    <div><Carousel /></div>
    <main><MainContent /></main>
    {/* <footer><BottomNav /></footer> */}
  </div>
  )
}
