import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import FishCard from "./components/FishCard";
import { fishes } from "./data/fishes";
import Cart from "./pages/Cart";
import About from "./pages/About";
import FishTanks from "./pages/FishTanks";
import Food from "./pages/Food";

export default function App() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (fish) => {
    const existing = cart.find((item) => item.id === fish.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === fish.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...fish, qty: 1 }]);
    }
  };

  const deleteFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <div className="p-6 max-w-6xl mx-auto">

        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fishes.map((fish) => (
                  <FishCard key={fish.id} fish={fish} addToCart={addToCart} />
                ))}
              </div>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/fish-tanks" element={<FishTanks addToCart={addToCart} />} />
          <Route path="/food" element={<Food addToCart={addToCart} />} />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                deleteFromCart={deleteFromCart}
              />
            }
          />
        </Routes>

      </div>
    </>
  );
}
