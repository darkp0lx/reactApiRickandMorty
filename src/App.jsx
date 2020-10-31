import React from "react";
import "./assets/styles/App.scss";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Login from "./components/Login";
import Home from "./containers/Home";
import Layout from "./containers/Layout";
import Player from "./components/Player";
import {BrowserRouter as Router,Switch,Route,BrowserRouter} from "react-router-dom";
const App = () => {
  const store = generateStore();

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/video/:id" component={Player}></Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </Provider>
  );
};
export default App;
