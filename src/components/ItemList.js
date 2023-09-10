import { ITEM_IMG_CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="flex p-2 m-2 border-b-2">
          <div className="w-9/12 flex flex-col ">
            <span className="font-semibold">{item?.card?.info?.name}</span>
            <span>
              Rs -{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
              /-
            </span>
            <p className="text-gray-600">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4 h-36">
            <div className="absolute trans">
              <button className="p-2 m-2 bg-slate-900 text-white rounded shadow-lg translate-x-16 translate-y-20">
                Add +
              </button>
            </div>
            <img
              className="rounded max-h-28 w-56"
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
