import { swiggy_api_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useActivityStatus } from "../utils/useActivityStatus";

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
    setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // conditional Rendering 
  // if (allRestaurant.length === 0) {
  //   return (<shimmerUi />);
  // }
const onlineStatus = useActivityStatus();
if (onlineStatus === false) return(
  <h1>you are offlene!! Pleace check your internet connection;</h1>
)

  return (allRestaurant?.length === 0) ? (<ShimmerUi />) : (
    <>
    <div className="">
      <div className=" md:pt-7 md:px-2 justify-center md:pl-2 flex mt-4 gap-2">
        <input className=" md:p-2 md:px-16 border rounded border-black md:me-2" type="text" placeholder="Search ..." value={searchText}
          onChange={(e) => { setSearchText(e.target.value); }} />

        <button className="md:p-2 px-1 bg-green-600 rounded text-white" onClick={() => {
          const data = filterData(searchText, allRestaurant);
          setFilteredData(data);
        }}
        >Click Here</button>
      </div>
      <div className="flex flex-wrap justify-center md:p-3 md:gap-3 p-2 mt-4 gap-3 m-auto">
        {filteredData?.map((restaurant) => {
            return (
              <Link key={...restaurant?.info?.id} 
              to={"/restaurants/"+restaurant?.info?.id}> 
              <RestaurantCard {...restaurant?.info} /> 
              </Link>
            )
          })
        }
      </div>
      </div>
    </>
  )
};

export default Body;
