import { useRef, useState } from "react";
import Header from "./components/Header";
import CartModal from "./components/CartModal";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "/dummy-products";

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  const modalRef = useRef();

  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return { items: updatedItems };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return { items: updatedItems };
    });
  }

  function handleOpenCart() {
    if (modalRef.current) {
      modalRef.current.open();
    }
  }

  return (
    <div className="bg-gradient-to-b from-teal-50 to-white min-h-screen">
      <Header cartItems={shoppingCart.items} onOpenCart={handleOpenCart} />
      <Shop onAddItemToCart={handleAddItemToCart} />
      <CartModal
        ref={modalRef}
        cartItems={shoppingCart.items}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
        title="Your Shopping Cart"
        actions={
          <button type="button" onClick={() => modalRef.current.close()}>
            Close
          </button>
        }
      />
    </div>
  );
}

export default App;
