import { RES_MENU } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  console.log("Inside restaurant menu component");
  const [resMenu, setResMenu] = useState(null);

  const resId = useParams().id;
  console.log(resId);
  const fetchResMenu = async () => {
    console.log("I ran");
    console.log(RES_MENU + { resId });
    const data = await fetch(RES_MENU + resId);
    const json = await data.json();
    setResMenu(json);
    console.log(json);
  };

  console.log(useParams());

  useEffect(() => {
    console.log("Inside useEffect");
    fetchResMenu();
  }, []);

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { text } = resMenu?.data?.cards[0]?.card?.card;
  const resMenuItems =
    resMenu?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards ||
    resMenu?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;
  console.log(resMenuItems);

  return (
    <div className="restaurant-menu">
      <h1>{text}</h1>
      <ul>
        {resMenuItems.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
