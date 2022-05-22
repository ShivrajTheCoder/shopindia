import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Imageslider from "./components/Imageslider";
import Navbar from "./components/Navbar";
import AllProducts from "./shopComponents/allProducts";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Imageslider/>}/>
       <Route exact path="/products" element={<AllProducts/>}/>
     </Routes>
     </BrowserRouter>
       {/* <AllProducts/> */}
     
     <Footer/>
    </div>
  );
}

export default App;
