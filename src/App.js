import React from "react";
import "./App.css";
import Navibar from "./components/NaviBar";
import Hero from "./components/Hero";
import AboutPage from "./components/AboutPage";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navibar />
        <Hero />
      </header>
      <section className="App-section">
        <AboutPage />
      </section>
      <section className="App-section">
        <Menu />
      </section>
      <section className="App-section" id="contactSection">
       <Contact />
      </section>
    </div>
  );
}

export default App;
