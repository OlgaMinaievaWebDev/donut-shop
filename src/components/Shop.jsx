import donut from "../assets/main.avif";
import Product from "./Product";
import { DUMMY_PRODUCTS } from "/dummy-products";

function Shop({ onAddItemToCart }) {
  return (
    <main className="flex flex-col items-center space-y-5 px-4 md:px-10">
      <div className="w-full h-[30vh] overflow-hidden relative">
        <img
          src={donut}
          alt="picture of donut"
          className="w-full h-full object-cover"
        />
        {/* Text Overlay */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-100 to-white bg-opacity-90 p-4 rounded-md shadow-md">
          <h2 className="font-bold text-xl text-rose-700">
            The Best Donuts in Town!
          </h2>
        </div>
      </div>
      {/* Responsive Product Grid */}
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id} className="list-none">
            <Product {...product} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Shop;
