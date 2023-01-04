import './App.css';
import Result from './result.js';
import axios from 'axios'
import useState from 'react'
import PBTHomePage from './Pages/PBTHomePage.js';
import ImageSlider from './components/ImageSlider';
export default function App() {

  return (

    
    <div className="App">
      <PBTHomePage />
{/* <ImageSlider /> */}
      {/* <Result /> */}
    </div>
  );
}
// }