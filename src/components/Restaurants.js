import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const resData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    if (!response.ok) {
      throw new Error(`Unable to process the request ${response.status}`);
    }

    const data = await response.json();

    const resData =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurants(resData);
    setLoading(false);
  };

  useEffect(() => {
    resData();
  }, []);
  if (loading) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="resList">
      {console.log("Not accessed")}
      {restaurants.map((res) => (
        <ResCard key={res.info.id} data={res} />
      ))}
    </div>
  );
};

export default Restaurants;
