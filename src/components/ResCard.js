const ResCard = ({ data }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    data.info;
  return (
    <div className="resCard">
      <img
        alt="Restaurant Logo"
        className="resLogo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      <h3>{sla.deliveryTime} mins</h3>
    </div>
  );
};

export default ResCard;
