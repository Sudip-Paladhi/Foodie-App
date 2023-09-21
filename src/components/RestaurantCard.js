import { IMG_CDN_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  sla,
  avgRatingString,
  costForTwo,
}) => {
  return (
    <div className="md:w-72 md:px-4 mt-2 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-200">
      <div className="h-full w-full object-cover">
        <img
          className="rounded "
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="image"
        />
      </div>

      <h2 className="text-xl font-bold md:mt-1 md:pt-1 ml-2">{name}</h2>
      <p className="text-gray-800 text-sm ml-2">
        {cuisines && cuisines.join(", ")}
      </p>
      <div className="flex justify-between text-sm md:mt-2 md:pt-2 mx-2 mt-1 pb-1">
        <div
          className={`flex items-center gap-2 md:font-bold text-sm px-1 rounded w-fit  ${
            avgRatingString >= 4
              ? " bg-slate-200 text-green-600 "
              : " bg-orange-200 text-red-600"
          }`}
        >
          <FaStar />
          <p>{avgRatingString}</p>
        </div>
        <span className="md:font-bold text-gray-700">
          {sla?.lastMileTravelString ?? "1.9 km"}
        </span>
        <span className="md:font-bold text-gray-700">
          {costForTwo ?? "₹350 for two"}
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
