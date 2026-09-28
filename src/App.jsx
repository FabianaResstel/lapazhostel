import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyStay from "./components/WhyStay";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <WhyStay />
      </main>
    </>
  );
}

export default App;
