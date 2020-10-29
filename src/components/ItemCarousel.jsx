import React from "react";
import playIcon from "../assets/img/play-icon.png";
import plusIcon from "../assets/img/plus-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { favoriteAction, deleteFavorite } from "../redux/mortyDucks";
import deleteIcon from "../assets/img/deleteIcon.png";
const ItemCarousel = (props) => {
  const { isList, id, name, image, gender, status } = props;
  const dispatch = useDispatch();
  return (
    <div id={`${id}`} className="carousel-item">
      <img className="carousel-item__img" src={image} alt="" />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />
          {isList ? (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
              onClick={() => {
                dispatch(favoriteAction({ id, name, image, gender, status }));
              }}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={deleteIcon}
              alt="Plus Icon"
              onClick={() => {
                dispatch(deleteFavorite({ id }));
              }}
            />
          )}
        </div>
        <p className="carousel-item__details--title">{name}</p>
        <p className="carousel-item__details--subtitle">genero: {gender} </p>
        <p className="carousel-item__details--subtitle">vive?: {status} </p>
      </div>
    </div>
  );
};
export default ItemCarousel;
