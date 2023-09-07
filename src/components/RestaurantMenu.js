import { useEffect, useState } from "react";
import { IMG_CDN_URL, swiggy_menu_api_URL } from "../utils/constants";
import ShimmerUi from "./ShimmerUi";
import MenuItems from "./MenuItems";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [itemCard, setItemCard] = useState([]);
  const{resId} = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(swiggy_menu_api_URL + resId);

    const json = await data.json();
    console.log(json);
    setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
    setItemCard(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };

  console.log(itemCard);
  if (restaurantInfo === null) <ShimmerUi />;

  return (
    <>
      <div className="flex px-48 p-14">
        <img
          className="h-32 rounded pr-12"
          src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId}
          alt={restaurantInfo?.name}
        />
        <div>
          <p>{restaurantInfo?.name}</p>
          <p>{restaurantInfo?.cuisines?.join(", ")}</p>
          <p>{restaurantInfo?.costForTwoMessage}</p>
          <p>{restaurantInfo?.avgRatingString}</p>
          <p>{restaurantInfo?.totalRatingsString}</p>
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
