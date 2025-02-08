import { forwardRef, useImperativeHandle, useRef, useContext } from "react";
import ReactDOM from "react-dom";
import { CartContext } from "../store/shopping-cart-context";

const CartModal = forwardRef(function CartModal({ title }, ref) {
  const { items, updateItemQuantity } = useContext(CartContext);
  const dialogRef = useRef(); // Local ref for the <dialog> element

  // Expose the open and close methods to the parent component
  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current.showModal(), // Open the modal
    close: () => dialogRef.current.close(), // Close the modal
  }));

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return ReactDOM.createPortal(
    <dialog
      ref={dialogRef} // Use the local ref here
      className="rounded-lg p-6 bg-white shadow-lg w-11/12 max-w-2xl backdrop:bg-gray-800 backdrop:opacity-50 m-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-rose-700">{title}</h2>

      {/* Cart Items */}
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-600">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateItemQuantity(item.id, -1)}
                  className="px-3 py-1 bg-rose-100 text-rose-700 rounded-md hover:bg-rose-200"
                >
                  -
                </button>
                <span className="text-gray-800">{item.quantity}</span>
                <button
                  onClick={() => updateItemQuantity(item.id, 1)}
                  className="px-3 py-1 bg-rose-100 text-rose-700 rounded-md hover:bg-rose-200"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Total Price */}
      {items.length > 0 && (
        <div className="mt-6 pt-4 border-t">
          <p className="text-lg font-semibold text-gray-800">
            Total:{" "}
            <span className="text-rose-700">${totalPrice.toFixed(2)}</span>
          </p>
        </div>
      )}

      {/* Actions (Checkout and Close Buttons) */}
      <div className="mt-6 flex justify-end space-x-4">
        <button
          onClick={() => dialogRef.current.close()}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
        >
          Close
        </button>
        {items.length > 0 && (
          <button
            onClick={() => dialogRef.current.close()}
            className="px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600"
          >
            Checkout
          </button>
        )}
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default CartModal;
