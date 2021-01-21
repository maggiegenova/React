import React from "react";
import "./image-list-component.css";
import ImageCard from "./image-card-component";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      // <img key={image.id} src={image.urls.regular} alt={image.description} />
      <ImageCard key={image.id} image={image}></ImageCard>
    );
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
