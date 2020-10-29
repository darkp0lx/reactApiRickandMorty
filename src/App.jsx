import React from "react";
import "./assets/styles/App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Categories from "./components/Categories";
import Carousel from "./components/Carousel";
import ItemCarousel from "./components/ItemCarousel";
import UseHook from "./components/hooks/useInitialState";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Favorites from './components/Favorites'

const api = "https://rickandmortyapi.com/api/character/";
const App = () => {
  const store = generateStore();
  const hook = UseHook(api);
  const hook2 = UseHook(`${api}?page=2`);
  const hook3 = UseHook(`${api}?page=3`);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
        <Favorites/>
        <Categories text="page 1">
          <Carousel>
            {hook.map((item) => (
              <ItemCarousel isList key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
        <Categories text="page 2">
          <Carousel>
            {hook2.map((item) => (
              <ItemCarousel isList  key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
        <Categories  text="Page 3">
          <Carousel>
            {hook3.map((item) => (
              <ItemCarousel isList key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      </div>
    </Provider>
  );
};
export default App;
