import React from "react";
import ItemCarousel from "./ItemCarousel";
import { useSelector } from "react-redux";
import Categories from "./Categories";
import Carousel from "./Carousel";
const Favorites = () => {
  const data = useSelector((store) => store.morty.myList);
  return (
    <Categories text="Mis Favoritos">
      <Carousel>
        {data.length > 0 &&
          data.map((item) => <ItemCarousel key={item.id} {...item} />)}
      </Carousel>
    </Categories>
  );
};
export default Favorites;
