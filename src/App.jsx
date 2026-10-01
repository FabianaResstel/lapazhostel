import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";

import en from "./locales/en";
import pt from "./locales/pt";
import es from "./locales/es";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyStay from "./components/WhyStay";
import LaPaz from "./components/LaPaz";
import ThingsToDo from "./components/ThingsToDo";
import Restaurants from "./components/Restaurants";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Property from "./components/Property";

const translations = {
  en,
  pt,
  es,
};

function Page() {
  const { lang, page } = useParams();
  const t = translations[lang];
  useEffect(() => {
    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView();
    }
  }, []);

  if (page === "property") {
    return (
      <>
        <Navbar t={t} />
        <Property t={t} />
        <Footer t={t} />
      </>
    );
  }

  return (
    <>
      <Navbar t={t} />

      <main data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="100">
        <Hero t={t} />
        <About t={t} lang={lang} />
        <WhyStay t={t} />
        <LaPaz t={t} />
        <ThingsToDo t={t} />
        <Restaurants t={t} />
        <Contact t={t} />
        <ContactForm t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang/:page?" element={<Page />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
