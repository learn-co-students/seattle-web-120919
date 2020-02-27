import React from "react";
import { Link } from "react-router-dom";

const Glasses = ({ glasses }) => {
  const { image, style, maker, id } = glasses;
  // destructuring

  return (
    <>
      <div className="col col-md-3">
        <Link to={`/glasses/${id}`}>
          <div className="card">
            <img className="card-img-top" alt="glasses" src={image} />
            <div className="card-body">
              <h3>{style}</h3>
              <h4>{maker}</h4>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Glasses;
