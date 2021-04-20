import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Admin from "./admin/Admin";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AboutUs from "./Components/Main/AboutUs/AboutUs";
import Home from "./Components/Main/Home/Home";
import SplitLeft from "./Components/Main/SplitLeft/SplitLeft";
import SplitRight from "./Components/Main/SplitRight/SplitRight";
import Nav from "./Components/Nav/Nav";
import firebase from "./firebase";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/left">
          <SplitLeft />
        </Route>
        <Route path="/right">
          <SplitRight />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
