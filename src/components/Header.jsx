import { useContext } from "react";
import logo from "../assets/logo.jpg";
import { CartContext } from "../store/shopping-cart-context";

function Header({ onOpenCart }) {
  const { items } = useContext(CartContext);

  return (
    <header className="flex flex-wrap justify-between items-center pt-5 px-4 md:px-10 space-y-3 md:space-y-0">
      <img src={logo} alt="donut-shop logo" className="w-[80px]" />
      <h1 className="font-bold text-2xl uppercase flex-1 text-center text-rose-700">
        Crispy Rings
      </h1>
      <button
        onClick={onOpenCart}
        className="bg-rose-500 text-white font-bold py-2 px-4 rounded-md hover:bg-rose-600 transition"
      >
        Cart ({items.length})
      </button>
    </header>
  );
}

export default Header;
