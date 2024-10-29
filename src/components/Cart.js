import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-2xl font-bold text-xl">Cart</h1>
      <CartItems item={cartItems} />

      {/* <CartItems/> */}
    </div>
  );
};
export default Cart;
