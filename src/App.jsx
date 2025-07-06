import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import ProductCatalog from "./Components/ProductCatalog";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<ProductCatalog />} />
				<Route path='/Cart' element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
