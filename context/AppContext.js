import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "iPhone 13 Pro, 128GB, szary",
      price: "3299 zł",
      location: "Kielce",
      image: "/i1.png",
      images: ["/i1.png", "/i2.png", "/i3.png", "/i4.png"],
      condition: "Używany",
      delivery: ["Kurier", "Odbiór osobisty"],
      description: "Telefon w bardzo dobrym stanie, bez uszkodzeń.",
    },
    {
      id: 2,
      title: "iPhone 13 Pro, 128GB, szary",
      price: "3299 zł",
      location: "Kielce",
      image: "/i1.png",
      images: ["/i1.png", "/i2.png", "/i3.png", "/i4.png"],
      condition: "Używany",
      delivery: ["Kurier", "Odbiór osobisty"],
      description: "Telefon w bardzo dobrym stanie, bez uszkodzeń.",
    },
  ]);

  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(), // Simple ID generation
      image: product.image || "/i1.png", // Domyślny obrazek jeśli nie podano
    };
    setProducts((prev) => [newProduct, ...prev]);
    return newProduct;
  };

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^\d]/g, ""));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        addProduct,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        getCartTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
