import React from 'react'
import boxing from '../Pages/Assets/CarouselBoxingDay.png'
import surface from '../Pages/Assets/CarouselMicrosoft.png'
import gift from '../Pages/Assets/CarouselGift.png'
import xbox from '../Pages/Assets/CarouselXbox.png'
import steel from '../Pages/Assets/CarouselSteel.png'
import bonus from '../Pages/Assets/CarouselBonus.png'
// import ImageSlider from './ImageSlider'


// export default function carouselHomePage() {

// const slides = [
//   {url: `${boxing}`, title: 'cat1'},
//   {url: `${boxing}`, title: 'cat1'},
//   {url: `${boxing}`, title: 'cat1'},
//   {url: `${boxing}`, title: 'cat1'},
//   {url: `${boxing}`, title: 'cat1'},
// ]
// const containerStyles = {
//   width: '500px',
//   height: "280",
//   margin: "0 auto",
// }
//   return (

//     <div style={containerStyles}><ImageSlider slides={slides} /></div>
//   )
// }

import ImageSlider from "./ImageSlider";
const App = () => {
  const slides = [
    { url: `${boxing}`, title: "beach" },
    { url: `${surface}`, title: "beach" },
    { url: `${gift}`, title: "beach" },
    { url: `${xbox}`, title: "beach" },
    { url: `${steel}`, title: "beach" },
    { url: `${bonus}`, title: "beach" },
   
  ];
  const containerStyles = {
    top: "20%",
    width: "100%",
    height: "400px",
    margin: "0 auto",

  
  };
  return (
    <div>
    
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;