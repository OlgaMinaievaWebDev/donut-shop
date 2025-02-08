import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

function Cart({ onUpdateCartItemQuantity }) {
  const { items } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow-md">
      {items.length === 0 && (
        <p className="text-gray-600 text-center">No items in cart!</p>
      )}
      {items.length > 0 && (
        <ul className="space-y-3">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600">{formattedPrice}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => onUpdateCartItemQuantity(item.id, -1)}
                    className="px-3 py-1 bg-rose-100 text-rose-700 rounded-md hover:bg-rose-200"
                  >
                    -
                  </button>
                  <span className="text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateCartItemQuantity(item.id, 1)}
                    className="px-3 py-1 bg-rose-100 text-rose-700 rounded-md hover:bg-rose-200"
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {items.length > 0 && (
        <div className="pt-4 border-t">
          <p className="text-lg font-semibold text-gray-800">
            Cart Total:{" "}
            <span className="text-rose-700">{formattedTotalPrice}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
