import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Imageslider from "./components/Imageslider";
import Navbar from "./components/Navbar";
import AllProducts from "./shopComponents/AllProducts";
import Product from "./shopComponents/Product";
// import ProductDetails from "./shopComponents/ProductDetails";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <BrowserRouter>
     <Routes>
       {/* <Route  path="/proudct/1" element={<ProductDetails/>}/> */}
       <Route path="/" element={<Imageslider/>}/>
       <Route exact path="/products" element={<AllProducts/>}/>
       <Route path="/product/:id" element={<Product/>}/>
       <Route exact path="/cart" element={<Cart/>}/>
     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
