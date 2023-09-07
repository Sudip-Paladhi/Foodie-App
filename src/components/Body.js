import { swiggy_api_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const filterData = (searchText, allRestaurant) => {
  const filterData = allRestaurant.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}
const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurent();
  }, []);

  const getRestaurent = async () => {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    // console.log(json);
    setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }
  // conditional Rendering 
  // if (allRestaurant.length === 0) {
  //   return (<shimmerUi />);
  // }
  return (allRestaurant?.length === 0) ? (<ShimmerUi />) : (
    <>
      <div>
        <input type="text" value={searchText}
          onChange={(e) => { setSearchText(e.target.value); }} />

        <button onClick={() => {
          const data = filterData(searchText, allRestaurant);
          setFilteredData(data);
        }}
        >Click Here</button>
      </div>
      <div className="flex flex-wrap justify-center">
        {
          filteredData.map((restaurant) => {
            return (
              <Link key={...restaurant?.info?.id} 
              to={"/restaurants/"+restaurant?.info?.id}> 
              <RestaurantCard {...restaurant?.info} /> </Link>
            )
          })
        }
      </div>
    </>
  )
};

export default Body;
