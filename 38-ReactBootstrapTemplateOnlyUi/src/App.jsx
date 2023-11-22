import React from "react";
import "./index.scss";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Services from "./components/Services";
import CaloutSection from "./components/CaloutSection";
import Portfolio from "./components/Portfolio";
import ButtonsSection from "./components/ButtonsSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import UpButton from "./components/UpButton";
import MenuBar from "./components/MenuBar";

const App = () => {
  return (
    <>
      <Hero />
      <MenuBar />
      <UpButton />
      <InfoSection />
      <Services />
      <CaloutSection />
      <Portfolio />
      <ButtonsSection />
      <MapSection />
      <Footer />
    </>
  );
};

export default App;
