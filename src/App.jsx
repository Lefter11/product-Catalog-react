import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import ProductCatalog from "./Components/ProductCatalog";
import { useState,useEffect } from "react";

function App() {

  const [cart, setCart] = useState([]);
  const [productCatalog, setProductCatalog] = useState([]);


 async function fetchProducts()
  {

   const result = await fetch('https://api.escuelajs.co/api/v1/products');
   const data = await result.json();
   setProductCatalog(data);
    
  }


	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<ProductCatalog />} />
				<Route path='/Cart' element={<Cart/>} />

</Routes>
			<footer>
				<p>© 2025 My Website</p>
			</footer>
		</BrowserRouter>
	);
}

export default App;