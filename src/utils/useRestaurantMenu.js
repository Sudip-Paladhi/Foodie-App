import { useEffect, useState } from "react";
import { swiggy_menu_api_URL } from "./constants";
export const useRestaurantMenu = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [itemCard, setItemCard] = useState([]);
    useEffect(() => {
      fetchMenu();
    }, []);
  
    const fetchMenu = async () => {
      const data = await fetch(swiggy_menu_api_URL + resId);
  
      const json = await data.json();
      console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
      setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info),
      setItemCard(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        };
        
        return [restaurantInfo, itemCard]
};