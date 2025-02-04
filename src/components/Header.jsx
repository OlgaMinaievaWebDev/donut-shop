import logo from "../assets/logo.jpg";

function Header() {
  return (
    <header className="flex justify-between items-center pt-10 pb-10 px-[10%]">
      <img src={logo} alt="donut-shop logo" className="w-[70px]" />
      <h1 className="font-bold text-2xl uppercase ">Crispy Rings </h1>
      <button className="py-2 px-6 bg-rose-300 rounded-md cursor-pointer text-xl hover:bg-rose-400">
        Cart
      </button>
    </header>
  );
}

export default Header;
