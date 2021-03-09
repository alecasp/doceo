import React from "react";
import Header from "./Components/Header/Header";
import AboutUs from "./Components/AboutUs/AboutUs";
import Nav from "./Components/Nav/Nav";
import NewsContainer from "./Components/NewsContainer/NewsContainer";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <AboutUs />
      <NewsContainer />
      <Footer />
    </>
  );
}

export default App;
