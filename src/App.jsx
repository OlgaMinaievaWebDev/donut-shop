import { useRef } from "react";
import Header from "./components/Header";
import CartModal from "./components/CartModal";
import Shop from "./components/Shop";
import CartContextProvider from "./store/shopping-cart-context";

function App() {
  const cartModalRef = useRef(); // Create a ref for the CartModal

  return (
    <CartContextProvider>
      <div className="bg-gradient-to-b from-teal-50 to-white min-h-screen">
        <Header onOpenCart={() => cartModalRef.current.open()} />
        <Shop />
        <CartModal ref={cartModalRef} title="Your Shopping Cart" />
      </div>
    </CartContextProvider>
  );
}

export default App;
