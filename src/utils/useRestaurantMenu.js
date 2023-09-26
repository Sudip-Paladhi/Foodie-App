import { useEffect, useState } from "react";
import { swiggy_menu_api_URL } from "./constants";
export const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(swiggy_menu_api_URL + resId);
    const json = await data.json();
    setRestaurantInfo(json.data);
    
  };
console.log(restaurantInfo);
  return restaurantInfo;
};
