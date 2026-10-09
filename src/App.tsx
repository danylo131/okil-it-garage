// import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Info from "./components/info";
import Map from "./components/map";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center text-6xl">
        <Header />
        <Hero/>
        <Info />
        <Map />
        <Footer/>
      </div>
    </>
  );
}

export default App;
