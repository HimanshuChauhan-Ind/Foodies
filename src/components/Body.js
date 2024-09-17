import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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
    setFilteredRestaurants(resData);
    setLoading(false);
  };

  function searchRestautants() {
    const newFilteredResataurants = restaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(newFilteredResataurants);
  }

  useEffect(() => {
    resData();
  }, []);

  if (loading) {
    return <Shimmer></Shimmer>;
  }
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="searchbox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchRestautants();
            }
          }}
        ></input>
        <button onClick={searchRestautants}>Search</button>
      </div>
      <div className="resList">
        {filteredRestaurants.map((res) => (
          <ResCard key={res.info.id} data={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
