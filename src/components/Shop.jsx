import donut from "../assets/main.avif";
import Button from "./Button";

function Shop() {
  return (
    <main className="flex flex-col items-center space-y-5 px-4 md:px-10">
      <div className="w-full h-[30vh] overflow-hidden">
        <img
          src={donut}
          alt="picture of donut"
          className="w-full h-full object-cover"
        />
      </div>
      <Button>Cart</Button>
    </main>
  );
}

export default Shop;
