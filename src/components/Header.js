import { Link } from "react-router-dom";
import logo from "../Assets/foodie.png"
const Header = () => {
    return(
        <div className=" max-h-28 flex justify-between text-center shadow-lg">
            <div>
            <img className="h-20 ml-20" src={logo} alt="Logo" />
            </div>

            <div className="">
                <ul className="flex mx-4 p-7">
                    <li className=" mx-4">
                    <Link to="/">Home</Link>
                    </li>
                    <li className=" mx-4">
                    <Link to="/about">About</Link>
                    </li>
                    <li className=" mx-4">
                    <Link to="/contact">Contact</Link>
                    </li>
                    <li className=" mx-4">Cart</li>
                </ul>
            </div>
        </div>
    
    );
};

export default Header;