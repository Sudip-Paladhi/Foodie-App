import { FaAngleDown } from "react-icons/fa";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
    const [showItem, setShowItem] =useState(false);
    const handleClick = () => {
setShowItem(!showItem);

    }
  return (
    <div className="">
      <div className=" mx-auto my-5 items-center md:w-9/12 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <FaAngleDown />
          </span>
        </div>
        {showItem && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
