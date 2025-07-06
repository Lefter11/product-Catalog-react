import { create } from "zustand";
import { initProducts } from "../config";

const intialState = {
    productCatalog: initProducts,
    cart: [],
};

export const useAppStore = create((set) => ({
    ...intialState,
    addProduct: (newProduct) => {
        set((state) => ({
            productCatalog: [...state.productCatalog, newProduct],
        }));
    },
    addToCart: (productId) => {
        set((state) => {
            const product = state.productCatalog.find((p) => p.id === productId);
            if (product) {
                return { cart: [...state.cart, product] };
            }
            return state;
        });
    },
    clearCart: () => {
        set({ cart: [] });
    },
    removeFromCart: (productId) => {
        set((state) => ({
            cart: state.cart.filter((p) => p.id !== productId),
        }));
    },
    resetStore: () => {
        set(intialState);
    }
}));
