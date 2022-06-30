import { useState } from "react";
import "./tour.css";

export function Tour(props) {
  const { data, toursData, setToursData } = props;
  const { id, image, info, name, price } = data;
  const shortText = info.split("").slice(0, 190).join("") + " ... ";
  const [isFullInfo, setIsFullInfo] = useState(false);

  function removeTour(id) {
    setToursData(toursData.filter((item) => item.id !== id));
  }

  return (
    <article className="tour">
      <div className="image-div">
        <img src={image} alt={name} />
      </div>
      <div className="content-div">
        <div className="name-price-div">
          <h2>{name}</h2>
          <p>${price}</p>
        </div>
        <div className="info-div">
          <p>
            {isFullInfo ? info : shortText}{" "}
            <button onClick={() => setIsFullInfo(!isFullInfo)}>
              {isFullInfo ? "Show Less" : "Read More"}
            </button>
          </p>
        </div>
        <button onClick={() => removeTour(id)}>not interested</button>
      </div>
    </article>
  );
}
