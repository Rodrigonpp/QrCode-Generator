import React from "react";
import "./ImageComponent.css";

const ImageComponent = ({ content, isLoaded }) => {
  return (
    <div className="image-container">
      {!isLoaded && <p>Carregando...</p>}
      <div style={{ display: isLoaded ? "block" : "none" }}>{content}</div>
    </div>
  );
};

export default ImageComponent;
