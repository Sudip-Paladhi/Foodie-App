import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { ITEM_IMG_CDN_URL } from "../utils/constants";
import { RxCross1, FaIndianRupeeSign, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  selectItemsInCart,
  selectTotalPrice, } from "../Redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector(selectTotalPrice);
  const discount = (totalPrice * 0.1) / 100;
  const deliveryCharges = (totalPrice * 0.05) / 100;
  const totalAmt = totalPrice / 100 + deliveryCharges - discount;
  console.log(cartItems);

  const removeItem = (id) => dispatch(removeFromCart({ id }));
  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity({ id }));
  const increaseQuantity = (id) => dispatch(increaseItemQuantity({ id }));

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
                        src={ITEM_IMG_CDN_URL + item?.item?.card?.info?.imageId}
                        className="rounded-md"
                        alt="menu"
                      />
                    </div>

                    <div className="w-[60%] md:w-[52%] ">
                      <p className="text-base md:mb-2">
                        {item?.item?.card?.info?.name}
                      </p>
                      <div className="flex font-bold items-center mx-auto">
                        Rs-{" "}
                        {item?.item?.card?.info?.price
                          ? item?.item?.card?.info?.price / 100
                          : item?.item?.card?.info?.defaultPrice / 100}
                      </div>
                    </div>

                    <div className="flex gap-2 w-[23%] md:w-[30%]  flex-col md:flex-row items-center">
                      <div className="border-green-200 rounded shadow mx-auto text-xs md:text-base">
                        <button
                          className="text-lg px-2 hover:text-green-700 "
                          // onClick={() => dispatch(descreaseCartItem(item))}
                          onClick={() => decreaseQuantity(item?.item?.card?.info?.id)}
                        >
                          -
                        </button>
                        <span className="px-1 md:px-2 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          className="font-medium px-2 hover:text-green-700"
                          // onClick={() => dispatch(addToCart(item))}
                          onClick={() => increaseQuantity(item?.item?.card?.info?.id)}
                        >
                          +
                        </button>
                      </div>

                      <div
                      onClick={() => removeItem(item?.item?.card?.info?.id)}
                        className="hidden md:flex transition-all hover:text-red-600 cursor-pointer p-2 rounded my-auto"
                      >
                        <FaXmark />
                      </div>

                      <div
                        // onClick={() => dispatch(removeCartItem(item))}
                        onClick={() => removeItem(item?.item?.card?.info?.id)}
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
            <div className="p-4 text-center bg-slate-200  h-fit">
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
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div className='basis-5/12 h-fit sticky top-40 p-8 rounded-md border shadow-md my-8 md:m-0'>
          <h2 className='text-xl font-bold border-b pb-4'>Order Summary</h2>
    
          {/* order details */}
          <div className='py-4 text-lg space-y-4 border-b'>
            <div className='flex justify-between items-center font-semibold'>
              <p className='font-normal'>Price ({cartItems.length} items)</p>
              <p>₹ {totalPrice / 100}</p>
            </div>
            <div className='flex justify-between items-center font-semibold'>
              <p className='font-normal'>Discount (10%)</p>
              <p> - ₹ {parseFloat(discount).toFixed(2)}</p>
            </div>
            <div className='flex justify-between items-center font-semibold'>
              <p className='font-normal'>Delivery charges (5%)</p>
              <p>+ ₹ {parseFloat(deliveryCharges).toFixed(2)}</p>
            </div>
    
            <p className='text-sm my-2'>
              You'll save ₹{parseFloat(discount).toFixed(2)} on this order 🎉
            </p>
          </div>
    
          <div className='py-4 border-b'>
            <div className='md:flex justify-between items-center font-bold text-lg md:text-2xl'>
              <h1>Total Amount</h1>
              <h1 className='text-orange-500'>
                ₹ {parseFloat(totalAmt).toFixed(2)}
              </h1>
            </div>
          </div>
    
          <button className='w-full block mt-4 uppercase font-bold text-lg bg-orange-600 text-white text-center p-4 rounded-md'>
            Place order
          </button>
        </div>
      );

          
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
            <Link to="/">See Restaurants Near You!</Link>
          </button>
        </div>
      )}
    </>
  );
  
};
export default Cart;
