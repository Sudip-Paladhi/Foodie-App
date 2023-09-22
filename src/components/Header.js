import { Link } from "react-router-dom";
import logo from "../Assets/pngwing.com.png";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Header = () => {
  //Subscribing to the store using a Selector.
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex bg-white justify-between sticky top-0 z-50 md:h-20 h-14 shadow-lg md:px-16">
      <div className="">
        <img className="md:w-28 w-32 " src={logo} alt="Logo" />
      </div>

      <div className="">
        <ul className="flex justify-center align-middle gap-3 md:mx-4 md:py-6 text-gray-600 md:text-base pt-4">
          <li className=" md:mx-6 hover:text-orange-500 md:pt-1 ">
            <Link to="/">Home</Link>
          </li>
          <li className=" md:mx-6 md:pt-1 hover:text-orange-500">
            <Link to="/about">About</Link>
          </li>
          <li className=" md:mx-6 md:pt-1 hover:text-orange-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="  hover:text-orange-500 pr-1">
            <Link
              to="/cart"
              className="flex md:mx-6 md:pt-1 items-center w-fit md:py-1 hover:text-orange-500"
            >
              <FaShoppingCart />
              <div className="text-orange-500">({cartItems.length})</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
