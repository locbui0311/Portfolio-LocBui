import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Gifts from "./components/Gifts";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <main className="relative z-10">
        <About />
        <Services />
        <Work />
        <Project />
        <Contact />
        <Gifts />
      </main>
    </div>
  );
};

export default App;
