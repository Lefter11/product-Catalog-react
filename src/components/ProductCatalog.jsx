import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import AddProductForm from "./AddProductForm";
import { useAppStore } from "../store/useAppStore";

function ProductCatalog() {
	const products = useAppStore((state) => state.productCatalog);
	const cart = useAppStore((state) => state.cart);
	const cartNumber = cart.length;

	return (
		<div>
			<h1>Product Catalog</h1>
			<Link to='/Cart'> CART {cartNumber}</Link>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
			<AddProductForm />
		</div>
	);
}

export default ProductCatalog;
