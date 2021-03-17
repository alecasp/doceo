import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AboutUs from "./Components/Main/AboutUs/AboutUs";
import Home from "./Components/Main/Home/Home";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
