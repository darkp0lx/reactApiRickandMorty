import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Categories from "./components/Categories";
import Carousel from "./components/Carousel";
import ItemCarousel from "./components/ItemCarousel";
import UseHook from "./components/hooks/useInitialState";
import "./assets/styles/App.scss";
const api = "https://rickandmortyapi.com/api/character/";
const App = () => {
  const hook = UseHook(api);
  const hook2 = UseHook(`${api}?page=2`);
  const hook3 = UseHook(`${api}?page=3`);

  return (
    <div className="App">
      <Header />
      <Main />
      <Categories text="Mi lista">
        <Carousel>
          {hook.map((item) => (
            <ItemCarousel key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories text="Mi lista">
        <Carousel>
          {hook2.map((item) => (
            <ItemCarousel key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories text="Mi lista">
        <Carousel>
          {hook3.map((item) => (
            <ItemCarousel key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </div>
  );
};
export default App;
