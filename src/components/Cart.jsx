import { Link } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";
import './cart.css';

function Cart() {
	const cart = useAppStore((state) => state.cart);
	const clearCart = useAppStore ((state) =>state.clearCart);
	const removeFromCart = useAppStore((state) =>state.removeFromCart);
	return (
		<div className="cartPage">
			<h1>Shopping Cart</h1>
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div>

				<ul>




					{cart.map((item, index) => (
						<li key={index}>
							{item.title} - ${item.price} (Quantity:{" "}
							{item.quantity})
							<button onClick={ () =>
								removeFromCart(item.cartId)

							}> Remove Item  </button>
						</li>
					))}

					
				</ul>
					<button onClick={
						clearCart
					}>
					Clear Cart
					

					</button>


				</div>
			)}
			<Link to='/'>Back to Product Catalog</Link>
		</div>
	);
}

export default Cart;
