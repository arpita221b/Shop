import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ProductDetails from "./Components/ProductDetails";
import { createContext } from "react";

const Data = createContext();

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Data.Provider value={products}>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route
            path="/productdetails/:id"
            element={<ProductDetails />}
          ></Route>
        </Routes>
      </Data.Provider>
    </>
  );
}

export { Data };
export default App;
