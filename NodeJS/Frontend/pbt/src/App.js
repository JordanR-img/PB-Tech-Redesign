import './App.css';
import Result from './result.js';
import axios from 'axios'
import useState from 'react'
// import PBTHomePage from './Pages/PBTHomePage.js';
import PBTLoginPage from './Pages/PBTLoginPage';
import GuestSignIn from './Pages/PBTGuestSignIn'
import ImageSlider from './components/ImageSlider';
export default function App() {

  return (

    
    <div className="App">
      {/* <PBTLoginPage /> */}
    <GuestSignIn />

      {/* <PBTHomePage /> */}
{/* <ImageSlider /> */}
      {/* <Result /> */}
    </div>
  );
}
// }