import { ITEM_IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../Redux/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddIteam = (item) => {
    // Dispatch an action
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="flex md:p-2 md:36 md:m-2 border-b-2 md:h-auto h-28">
          <div className="w-8/12 md:w-9/12 flex flex-col ">
            <span className="font-semibold">{item?.card?.info?.name}</span>
            <span className="font-sem">
              Rs -{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
              /-
            </span>
            <p className=" text-gray-400 invisible lg:visible">{item?.card?.info?.description}</p>
          </div>
          <div className="w-4/12 md:w-3/12 md:pl-6 md:h-36">
            <div className="absolute">
              <button
                className="md:p-2 md:m-2 bg-slate-900 text-white rounded 
              shadow-lg md:translate-x-16 translate-x-4 md:translate-y-20 translate-y-14"
                onClick={() => handleAddIteam(item)}
              >
                Add +
              </button>
            </div>
            <img
              className="rounded md:max-h-28 md:w-56 pt-4"
              src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
              alt="Image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
