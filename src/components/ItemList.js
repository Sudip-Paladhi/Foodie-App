import { ITEM_IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddIteam = (item) => {
    // Dispatch an action
    dispatch(addToCart(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex pt-3 md:p-3 border-b-2 md:h-auto h-32"
        >
          <div className="w-8/12 pt-1 md:w-9/12 flex flex-col pl-1">
            <span className="md:font-bold font-semibold leading-5 md:pb-1 md:pt-4 align-middle">
              {item?.card?.info?.name}
            </span>
            <span className="md:font-semibold md:pb-1">
              Rs -{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
              /-
            </span>
            <p className=" text-gray-400 invisible lg:visible">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-[30%] md:w-3/12 md:py-2 md:pl-16 md:h-36">
            <div className="relative ">
              <img
                className="rounded h-full w-full object-cover md:w-36 md:h-24"
                src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                alt="Image"
              />
              <button
                className="absolute bottom-[-8px] justify-center translate-x-4 md:p-2 md:m-2 bg-slate-900 text-white rounded shadow-lg md:translate-x-8 md:translate-y-4"
                onClick={() => handleAddIteam(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
