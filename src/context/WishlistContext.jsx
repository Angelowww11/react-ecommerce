import { createContext, useEffect, useMemo, useState } from "react";

export const WishlistContext = createContext(null);

const STORAGE_KEY = "re_wishlist_v1";

function safeParse(json, fallback) {
  try {
    const parsed = JSON.parse(json);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? safeParse(raw, []) : [];
    return Array.isArray(parsed) ? parsed : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo(() => {
    const isFavorite = (id) => items.some((p) => p.id === id);
    const toggleFavorite = (product) => {
      if (!product?.id) return;
      setItems((prev) => {
        const exists = prev.some((p) => p.id === product.id);
        if (exists) return prev.filter((p) => p.id !== product.id);
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            rating: product.rating,
            category: product.category,
          },
        ];
      });
    };
    const removeFavorite = (id) =>
      setItems((prev) => prev.filter((p) => p.id !== id));
    const clearWishlist = () => setItems([]);

    return {
      items,
      isFavorite,
      toggleFavorite,
      removeFavorite,
      clearWishlist,
    };
  }, [items]);

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

