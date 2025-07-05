import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import ProductCatalog from "./Components/ProductCatalog";
import { useState } from "react";
import { initProducts } from "./config";

function App() {
	const [productCatalog, setProductCatalog] = useState(initProducts);
	const [cart, setCart] = useState([]);

	const addProduct = (newProduct) => {
		setProductCatalog((prevCatalog) => [...prevCatalog, newProduct]);
	};


	const addToCart = (productId) => {
		const product = productCatalog.find((p) => p.id === productId);
		if (product) {
			setCart((prevCart) => [...prevCart, product]);
		}
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<ProductCatalog
							productCatalog={productCatalog}
							addProduct={addProduct}
							addToCart={addToCart}
							cartNumber={cart.length}
						/>
					}
				/>
				<Route path='/Cart' element={<Cart cart={cart} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
