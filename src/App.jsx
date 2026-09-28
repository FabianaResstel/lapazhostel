import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyStay from "./components/WhyStay";
import LaPaz from "./components/LaPaz";
import ThingsToDo from "./components/ThingsToDo";
import Restaurants from "./components/Restaurants";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <WhyStay />
        <LaPaz />
        <ThingsToDo />
        <Restaurants />
      </main>
    </>
  );
}

export default App;
