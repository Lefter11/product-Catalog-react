import { create } from "zustand";
import { initProducts } from "../config";

const intialState = {
    productCatalog: initProducts,
    cart: [],
};

export const useAppStore = create((set,get) => ({
    ...intialState,
    addProduct: (newProduct) => {
        set((state) => ({
            productCatalog: [...state.productCatalog, newProduct],
        }));
    },
    addToCart: (productId) => {
        set((state) => {
            const product = state.productCatalog.find((p) => p.id === productId);
           const productWithCartId= { ...product, cartId: state.cart.length + 1 };
           
            if (productWithCartId) {
                return { cart: [...state.cart, productWithCartId] };
            }

            return state;
        });
    },

   filteredProducts: (query) => {
        const { productCatalog } = get();
        if (!query?.trim()) return productCatalog;

        const q = query.toLowerCase();
        return productCatalog.filter((product) =>
            product.title.toLowerCase().includes(q)
        );
    },


    clearCart: () => {
        set({ cart: [] });


    },
  
    removeFromCart: (productId) => {
        set((state) => ({
            cart: state.cart.filter((p) => p.cartId !== productId),
        }));
    },
    resetStore: () => {
        set(intialState);

    }
}));
