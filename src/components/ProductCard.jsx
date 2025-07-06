import { useAppStore } from "../store/useAppStore";

function ProductCard({ product }) {
	const addToCart = useAppStore((state) => state.addToCart);

	return (
		<div
			style={{
				border: "1px solid #ccc",
				padding: "10px",
				width: "200px",
				margin: "10px",
			}}
		>
			<h2>{product.title}</h2>
			<div>Price: {product.price}</div>
			<div>Description: {product.description}</div>
			<div>Quantity: {product.quantity}</div>

			<button onClick={() => addToCart(product.id)}>Add to cart</button>
		</div>
	);
}

export default ProductCard;
