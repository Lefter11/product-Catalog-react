import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import AddProductForm from "./AddProductForm";

function ProductCatalog({ productCatalog, addProduct, addToCart, cartNumber }) {
	return (
		<div>
			<h1>Product Catalog</h1>
			<Link to='/Cart'> CART {cartNumber}</Link>
			{productCatalog.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					addToCart={addToCart}
				/>
			))}
			<AddProductForm
				productCatalog={productCatalog}
				addProduct={addProduct}
			/>
		</div>
	);
}

export default ProductCatalog;
