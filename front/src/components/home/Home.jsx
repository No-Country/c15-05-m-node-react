import React from "react";
import Header from "../shared/Header/Header";
import AboutUs from "./home-comp/AboutUs";
import Carousel from "./home-comp/Carousel";
import Registrate from "./home-comp/Registrate";
import { Footer } from "./home-comp/Footer";

const Home = () => {
  return (
    <div>
      <Header/>
      <AboutUs/>
      <Carousel/>
      <Registrate/>
      <Footer/>
    </div>
  );
};

export default Home;
