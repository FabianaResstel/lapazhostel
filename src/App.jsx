import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyStay from "./components/WhyStay";
import LaPaz from "./components/LaPaz";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <WhyStay />
        <LaPaz />
      </main>
    </>
  );
}

export default App;
