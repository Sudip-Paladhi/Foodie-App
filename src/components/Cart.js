import { useSelector } from "react-redux/es/hooks/useSelector";
import { ITEM_IMG_CDN_URL } from "../utils/constants";
import { FaXmark, LiaRupeeSignSolid } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      {cartItems.length > 0 ? (
        <div className="md:mx-28 mt-1 md:mt-6 flex md:gap-10 flex-col lg:flex-row ">
          <div className="lg:w-3/4 cart-scroll">
            {cartItems &&
              cartItems.map((item) => {
                return (
                  <div
                    className="flex mb-5 items-center gap-2 md:gap-3"
                    key={item.id}
                  >
                    <div className="w-[18%] ">
                      <img
                        src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                        className="rounded-md"
                        alt="menu"
                      />
                    </div>

                    <div className="w-[60%] md:w-[52%] ">
                      <p className="text-base md:mb-2">
                        {item?.card?.info?.name}
                      </p>
                      <div className="flex font-bold items-center mx-auto">
                        Rs-{" "}
                        {item?.card?.info?.price
                          ? item?.card?.info?.price / 100
                          : item?.card?.info?.defaultPrice / 100}
                      </div>
                    </div>

                    <div className="flex gap-2 w-[23%] md:w-[30%]  flex-col md:flex-row items-center">
                      <div className="border-green-200 rounded shadow mx-auto text-xs md:text-base">
                        <button
                          className="text-lg px-2 hover:text-green-700 "
                          // onClick={() => dispatch(descreaseCartItem(item))}
                        >
                          -
                        </button>
                        <span className="px-1 md:px-2 font-medium">
                          {item.itemCount}
                        </span>
                        <button
                          className="font-medium px-2 hover:text-green-700"
                          // onClick={() => dispatch(addToCart(item))}
                        >
                          +
                        </button>
                      </div>

                      <div
                        // onClick={() => dispatch(removeCartItem(item))}
                        className="hidden md:flex transition-all hover:text-red-600 cursor-pointer p-2 rounded my-auto"
                      >
                        <FaXmark />
                      </div>

                      <div
                        // onClick={() => dispatch(removeCartItem(item))}
                        className="md:hidden transition-all w-18 text-red-600 cursor-pointer rounded my-auto px-1 shadow text-sm"
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="flex flex-col lg:w-2/5 ">
            <div className="p-4 text-center bg-green-100  h-fit">
              <div className="font-medium text-xl ">
                <div className="flex justify-between">
                  <p className="">To Pay </p>
                  <div className="flex items-center"></div>
                </div>
              </div>

              <button
                className="bg-green-600 text-white p-2 w-full mt-3 hover:shadow-xl shadow-md transition-all"
                onClick={() => alert("Order Successful 🤤😜")}
              >
                Checkout
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <button
                className="bg-green-100 p-2 text-black hover:bg-green-600 hover:shadow-md hover:text-white transition-all shadow text-sm md:text-base"
                // onClick={() => goBack()}
              >
                Continue Ordering
              </button>

              <button
                className="bg-red-100 p-2 text-black hover:bg-red-600 hover:shadow-md hover:text-white transition-all shadow text-sm md:text-base"
                // onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-10 flex items-center justify-center flex-col gap-4">
          <img
            src={"https://shidory.com/assets/images/empty_cart.webp"}
            className="md:w-[30%]"
            alt="cart"
          />
          <p className="text-xl font-bold text-green-700">Your Cart is Empty</p>
          <button className="hover:shadow-xl capitalize transition-all p-2 px-4 bg-green-700 rounded w-[fit-content] text-white text-sm font-bold">
            <Link to="/restaurants">See Restaurants Near You!</Link>
          </button>
        </div>
      )}
    </>
  );

  // return (
  //   <div className="flex text-center md:m-auto bg-slate-100 mt-10 p-6">
  //     <h1 className="text-2xl font-bold">cart</h1>
  //     <div>
  //       {cartItems.map((item) => (
  //         <div
  //           key={item?.card?.info?.id}
  //           className="flex pt-3 md:p-3 border-b-2 md:h-auto h-28 "
  //         >
  //           <div className="md:flex py-2 md:h-36">
  //             <div className=" ">
  //               <img
  //                 className="rounded h-full w-full object-cover md:w-36 md:h-28"
  //                 src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
  //                 alt="Image"
  //               />
  //             </div>

  //             <div className="w-8/12 pt-1 md:w-9/12 flex flex-col pl-1">
  //               <span className="md:font-bold font-semibold leading-5 md:pb-1 md:pt-4">
  //                 {item?.card?.info?.name}
  //               </span>
  //               <span className="md:font-semibold md:pb-1">
  //                 Rs -{" "}
  //                 {item?.card?.info?.price
  //                   ? item?.card?.info?.price / 100
  //                   : item?.card?.info?.defaultPrice / 100}
  //                 /-
  //               </span>
  //             </div>
  //           </div>
  //           <div className="flex gap-2 w-[23%] md:w-[30%]  flex-col md:flex-row items-center">
  //             <div className="border-green-200 rounded shadow mx-auto text-xs md:text-base">
  //               <button className="text-lg px-2">+</button>
  //               <span className="px-1 md:px-2 font-medium">{12}</span>
  //               <button className="font-medium px-2">-</button>
  //             </div>
  //             <FaXmark />
  //             <div>

  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default Cart;

// https://shidory.com/assets/images/empty_cart.webp
