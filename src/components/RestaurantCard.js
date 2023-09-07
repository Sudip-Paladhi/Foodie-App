import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  sla,
  avgRatingString,
  costForTwo
}) => {
  return (
    <div className=" h-80 w-72 px-4 hover:">
      <img
        className="rounded"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="image"
      />
      <h2 className="text-xl font-bold mt-1">{name}</h2>
      <p className="text-gray-800 text-sm">{cuisines && cuisines.join(", ")}</p>
      <div className="flex justify-between text-sm mt-2">
        <div
          className={`items-center gap-2 font-bold text-sm px-1 rounded w-fit ${
            avgRatingString >= 4
              ? " bg-slate-200 text-green-600 "
              : " bg-orange-200 text-red-600"
          }`}
        >
          <p>{avgRatingString}</p>
        </div>
        <span className="font-bold text-gray-700">
          {sla?.lastMileTravelString ?? "1.9 km"}
        </span>
        <span className="font-bold text-gray-700">
          {costForTwo ?? "₹350 for two"}
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;