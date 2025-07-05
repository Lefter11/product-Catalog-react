import React from "react";
import { useState } from "react";

function AddProductForm({ productCatalog, addProduct }) {
	const [newProductFormData, setNewProductFormData] = useState({
		title: "",
		price: "",
		description: "",
		quantity: "",
		category: "",
	});

	return (
		<div>
			<h2>Add New Product</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addProduct({
						id: productCatalog.length + 1,
						...newProductFormData,
					});
					setNewProductFormData({
						title: "",
						price: "",
						description: "",
						quantity: "",
						category: "",
					});
				}}
			>
				<input
					type='text'
					placeholder='Title'
					value={newProductFormData.title}
					onChange={(e) =>
						setNewProductFormData({
							...newProductFormData,
							title: e.target.value,
						})
					}
					required
				/>
				<input
					type='number'
					placeholder='Price'
					value={newProductFormData.price}
					onChange={(e) =>
						setNewProductFormData({
							...newProductFormData,
							price: e.target.value,
						})
					}
				/>
				<input
					type='text'
					placeholder='Description'
					value={newProductFormData.description}
					onChange={(e) =>
						setNewProductFormData({
							...newProductFormData,
							description: e.target.value,
						})
					}
				/>
				<input
					type='number'
					placeholder='Quantity'
					value={newProductFormData.quantity}
					onChange={(e) =>
						setNewProductFormData({
							...newProductFormData,
							quantity: e.target.value,
						})
					}
				/>
				<input
					type='text'
					placeholder='Category'
					value={newProductFormData.category}
					onChange={(e) =>
						setNewProductFormData({
							...newProductFormData,
							category: e.target.value,
						})
					}
				/>
				<button type='submit'>Add Product</button>
			</form>
		</div>
	);
}

export default AddProductForm;
