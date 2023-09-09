import { IMG_CDN_URL } from "../utils/constants";
import ShimmerUi from "./ShimmerUi";
import MenuItems from "./MenuItems";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { FaStar } from "react-icons/fa";

const RestaurantMenu = () => {

  const { resId } = useParams();
  const [restaurantInfo, itemCard] = useRestaurantMenu(resId);
  console.log(itemCard);
  if (restaurantInfo === null) <ShimmerUi />;

  return (
    <>
      <div className="justify-between flex px-48 p-14 border-b">
        <div className="flex">
          <img
            className="h-32 rounded pr-12"
            src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId}
            alt={restaurantInfo?.name}
          />
          <div>
            <p className=" font-bold text-2xl">{restaurantInfo?.name}</p>
            <p className="text-gray-700">{restaurantInfo?.cuisines?.join(", ")}</p>
            <p className="text-gray-700">{restaurantInfo?.costForTwoMessage}</p>
          </div>
        </div>

        <div className="border pt-10 rounded-xl px-3 items-center">
          <div className={`flex items-center gap-2 font-bold text-sm px-1 rounded w-fit 
        ${restaurantInfo?.avgRatingString >= 4 ?
              " bg-slate-200 text-green-600"
              : " bg-orange-200 text-red-600"}`}>
            <FaStar />
            <p>{restaurantInfo?.avgRatingString}</p>
          </div>

          <p className="pt-4">{restaurantInfo?.totalRatingsString}</p>
        </div>
      </div>

      <ul>
        {itemCard.map((item) => {
          return <MenuItems key={item?.card?.info?.id} {...item?.card?.info} />;
        })}
      </ul>

      <div></div>
    </>
  );
};

export default RestaurantMenu;
