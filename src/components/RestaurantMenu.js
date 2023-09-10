import { IMG_CDN_URL } from "../utils/constants";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { FaStar } from "react-icons/fa";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);
  if (restaurantInfo === null) return <ShimmerUi />;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    totalRatingsString,
    avgRatingString,
  } = restaurantInfo?.cards[0]?.card?.card?.info;
  const categories =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (x) =>
        x.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="justify-between p-10 m-auto flex w-9/12 border-b">
        <div className="flex">
          <img
            className="h-32 rounded pr-12"
            src={IMG_CDN_URL + cloudinaryImageId}
            alt={name}
          />
          <div>
            <p className=" font-bold text-2xl">{name}</p>
            <p className="text-gray-700">{cuisines?.join(", ")}</p>
            <p className="text-gray-700">{costForTwoMessage}</p>
          </div>
        </div>

        <div className="border pt-10 rounded-xl px-3 items-center">
          <div
            className={`flex items-center gap-2 font-bold text-sm px-1 rounded w-fit 
        ${
          avgRatingString >= 4
            ? " bg-slate-200 text-green-600"
            : " bg-orange-200 text-red-600"
        }`}
          >
            <FaStar />
            <p>{avgRatingString}</p>
          </div>

          <p className="pt-4">{totalRatingsString}</p>
        </div>
      </div>
      <div>
        {categories.map((category) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </>
  );
};

// <ul>
// {itemCards.map((item) => {
//     return <MenuItems key={item?.card?.info?.id} {...item?.card?.info} />;
//   })}
// </ul>
export default RestaurantMenu;
