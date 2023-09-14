import { useSelector } from "react-redux/es/hooks/useSelector";

import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="w-6/12 text-center m-auto bg-slate-100 mt-10 p-6">
      <h1 className="text-2xl font-bold">cart</h1>
      <div>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
