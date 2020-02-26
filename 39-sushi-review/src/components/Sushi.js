import React from "react";

const Sushi = ({ name, img_url, id, price, eatSushi, eaten }) => {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatSushi(id, price)}>
        {/* Tell me if this sushi has been eaten! */

        eaten ? null : <img src={img_url} alt="sushi" width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
