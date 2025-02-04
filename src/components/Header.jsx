import logo from "../assets/logo.jpg";

function Header() {
  return (
    <header className="flex justify-between items-center pt-5 px-4 md:px-10 space-x-6">
      <img src={logo} alt="donut-shop logo" className="w-[60px]" />
      <h1 className="font-bold text-2xl uppercase flex-1 text-center">
        Crispy Rings
      </h1>
      <button className="btn">Cart</button>
    </header>
  );
}

export default Header;
