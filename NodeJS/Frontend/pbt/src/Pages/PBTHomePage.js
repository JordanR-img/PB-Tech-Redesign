import React from "react";
import TopNav from "../components/TopNavHomePage";
import BottomNav from "../components/BottomNavHomePage";
import Carousel from "../components/CarouselHomePage";
import MainContent from "../components/MainContentHomePage";
export default function PBTHomePage() {
  return ( 
  <div>
    <header><TopNav /></header>
    <section><Carousel /></section>
    <main><MainContent /></main>
    <footer><BottomNav /></footer>
  </div>
  )
}
