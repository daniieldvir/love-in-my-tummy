import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "../types/product";

export interface BasketItem {
    product: Product;
    quantity: number;
}

type BasketContextType = {
    basket: BasketItem[];
    addToBasket: (product: Product) => void;
    removeFromOne: (productId: number) => void;
    removeItem: (productId: number) => void;
    clearBasket: () => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);
const BASKET_STORAGE_KEY = "basket";

export const BasketProvider = ({ children }: { children: ReactNode }) => {
    const [basket, setBasket] = useState<BasketItem[]>(() => {
        const saved = localStorage.getItem(BASKET_STORAGE_KEY);
        if (!saved) return [];
        try {
            const parsed = JSON.parse(saved);
            // Simple migration check: if the first item has 'price' but no 'product' property, it's the old format
            if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].price && !parsed[0].product) {
                return parsed.map((p: any) => ({ product: p, quantity: 1 }));
            }
            return parsed;
        } catch (e) {
            console.error("Failed to parse basket from storage", e);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(BASKET_STORAGE_KEY, JSON.stringify(basket));
    }, [basket]);

    const addToBasket = (product: Product) => {
        setBasket(prev => {
            const existingItem = prev.find(item => item.product.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { product, quantity: 1 }];
        });
    };

    const removeFromOne = (productId: number) => {
        setBasket(prev => {
            const existingItem = prev.find(item => item.product.id === productId);
            if (existingItem && existingItem.quantity > 1) {
                return prev.map(item =>
                    item.product.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
            return prev.filter(item => item.product.id !== productId);
        });
    };

    const removeItem = (productId: number) => {
        setBasket(prev => prev.filter(item => item.product.id !== productId));
    };

    const clearBasket = () => {
        setBasket([]);
    };

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromOne, removeItem, clearBasket }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => {
    const context = useContext(BasketContext);
    if (!context) throw new Error("useBasket must be used within BasketProvider");
    return context;
};
