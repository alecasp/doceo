import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AboutUs from "./Components/Main/AboutUs/AboutUs";
import Home from "./Components/Main/Home/Home";
import SplitLeft from "./Components/Main/SplitLeft/SplitLeft";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/left">
          <SplitLeft />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
