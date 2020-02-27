import React from "react";
import Glasses from "./Glasses";

const GlassesBrowser = ({ glasses }) => {
  
  const renderGlasses = () => (
    glasses.map((glass, index) => < Glasses glasses={ glass } key={ index } />)
  );
  
  return (
    <>
      <div className="container">
        <div className="row">{ renderGlasses() }</div>
      </div>
    </>
  );
};

export default GlassesBrowser;
