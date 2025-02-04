import logo from "../assets/logo.jpg";
import Button from "./Button";

function Header() {
  return (
    <header className="flex flex-wrap justify-between items-center pt-5 px-4 md:px-10 space-y-3 md:space-y-0">
      <img src={logo} alt="donut-shop logo" className="w-[80px]" />
      <h1 className="font-bold text-2xl uppercase flex-1 text-center">
        Crispy Rings
      </h1>
      <Button>Cart</Button>
    </header>
  );
}

export default Header;
