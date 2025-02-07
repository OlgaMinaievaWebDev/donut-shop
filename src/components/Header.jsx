import logo from "../assets/logo.jpg";
import Button from "./Button";

function Header() {
  return (
    <header className="flex flex-wrap justify-between items-center pt-5 px-4 md:px-10 space-y-3 md:space-y-0">
      <img src={logo} alt="donut-shop logo" className="w-[80px]" />
      <h1 className="font-bold text-2xl uppercase flex-1 text-center text-rose-700">
        Crispy Rings
      </h1>
      <Button className="bg-rose-500 text-white font-bold py-2 px-4 rounded-md hover:bg-rose-600 transition">
        Cart
      </Button>
    </header>
  );
}

export default Header;
