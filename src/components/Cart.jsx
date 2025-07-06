import { Link } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";

function Cart() {
	const cart = useAppStore((state) => state.cart);

	return (
		<div>
			<h1>Shopping Cart</h1>
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<ul>
					{cart.map((item, index) => (
						<li key={index}>
							{item.title} - ${item.price} (Quantity:{" "}
							{item.quantity})
						</li>
					))}
				</ul>
			)}
			<Link to='/'>Back to Product Catalog</Link>
		</div>
	);
}

export default Cart;
