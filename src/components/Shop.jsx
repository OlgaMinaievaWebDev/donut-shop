import donut from "../assets/main.avif";
import Button from "./Button";

function Shop() {
  return (
    <main className="flex flex-col items-center space-y-5 px-4 md:px-10">
      <div className="w-full h-[30vh] overflow-hidden relative">
        <img
          src={donut}
          alt="picture of donut"
          className="w-full h-full object-cover"
        />
        {/* Text Overlay */}
        <div className="absolute top-4 right-4 bg-rose-100 bg-opacity-80 p-4 rounded-md shadow-lg">
          <h2 className="font-bold text-xl text-rose-700">
            The Best Donuts in Town!
          </h2>
        </div>
      </div>
      {/* Product List */}
    </main>
  );
}

export default Shop;
