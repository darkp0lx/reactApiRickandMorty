import React from "react";
import playIcon from "../assets/img/play-icon.png";
import plusIcon from "../assets/img/plus-icon.png";

const ItemCarousel = ({name,image,gender,status}) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={image} alt="" />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details--img"
          src={playIcon}
          alt="Play Icon"
        />
        <img
          className="carousel-item__details--img"
          src={plusIcon}
          alt="Plus Icon"
        />
      </div>
      <p className="carousel-item__details--title">{name}</p>
      <p className="carousel-item__details--subtitle">genero: {gender} </p>
      <p className="carousel-item__details--subtitle">vive?:  {status} </p>

    </div>
  </div>
);
export default ItemCarousel;
