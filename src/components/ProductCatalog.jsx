import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import AddProductForm from "./AddProductForm";
import { useAppStore } from "../store/useAppStore";
import { useState, useEffect, useMemo } from "react";
import debounce from 'lodash/debounce';

function ProductCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = useAppStore((state) => state.productCatalog);
  const cart = useAppStore((state) => state.cart);
  const cartNumber = cart.length;
  

  const filteredProductsfn = useAppStore((state) => state.filteredProducts);

  const debouncedFilter = useMemo(
    () =>
      debounce((query) => {
        const results = filteredProductsfn(query);
        setFilteredProducts(results);
		console.log(results);
      }, 500),
	
    []
  );

  useEffect(() => {
    debouncedFilter(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    // Initial load (show all products)
    setFilteredProducts(filteredProductsfn(""));
  }, [products]);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products..."
      />

      <h1>Product Catalog</h1>
      <Link to="/Cart">CART {cartNumber}</Link>

      {filteredProducts?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      <AddProductForm />
    </div>
  );
}

export default ProductCatalog;
