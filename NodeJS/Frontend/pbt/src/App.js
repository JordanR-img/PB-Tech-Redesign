import './App.css';
import Result from './result.js';
import axios from 'axios'
import useState from 'react'
import PBTHomePage from './Pages/PBTHomePage.js';
export default function App() {
  // function Result(req, res) {

    // const [products, setProducts] =  useState([])
    // const fetchProducts = ()=>{
    //   axios.get(`http://localhost:4444/api`)
    //  .then(response => {
    //    const products = response.data
    //    setProducts(products)
    //  })  
    // }
  //   axios
  //     .get("localhost:4444/api")
  //     .then((res) => {
  //       console.log(res.config);
        
  //     })
  //     .catch(() => {
  //       alert("Data has not been received");
  //     });
  // }


  // console.log(Result())
  return (

    
    <div className="App">
      <PBTHomePage />

      {/* <Result /> */}
    </div>
  );
}
// }