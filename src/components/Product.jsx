import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <article className="flex flex-col shadow-md rounded-lg overflow-hidden h-[400px]">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="flex flex-col justify-between p-4 h-full">
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
        <p className="text-rose-700 font-bold">${price.toFixed(2)}</p>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
        <button
          onClick={() => addItemToCart(id)}
          className="py-2 px-6 bg-yellow-400 rounded-md cursor-pointer text-white text-xl hover:bg-yellow-500"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
export default Product;
