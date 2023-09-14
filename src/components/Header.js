import { Link } from "react-router-dom";
import logo from "../Assets/foodie.png";
import { FaShoppingCart } from "react-icons/fa";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
const Header = () => {
  //Subscribing to the store using a Selector.
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex bg-white justify-between sticky top-0 z-50 md:h-20 shadow-lg md:px-16">
      <div className="">
        <img className="md:w-20 w-14 p-1 md:pl-2 md:pt-1" src={logo} alt="Logo" />
      </div>

      <div className="">
        <ul className="flex justify-center gap-4 pr-1 md:mx-4 md:text-xl md:py-6 pt-4 text-gray-800 md:font-medium">
          <li className=" md:mx-4 hover:text-gree">
            <Link to="/">Home</Link>
          </li>
          <li className=" md:mx-4 hover:text-gree">
            <Link to="/about">About</Link>
          </li>
          <li className=" md:mx-4 hover:text-gree">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="  hover:text-gree">
            <Link to="/cart" className="flex md:mx-4 items-center w-fit md:py-1">
              <FaShoppingCart />
              <div>({cartItems.length}) </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
