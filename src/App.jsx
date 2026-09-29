import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";

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

const translations = {
  en,
  pt,
  es,
};

function Page() {
  const { lang } = useParams();
  const t = translations[lang];

  return (
    <>
      <Navbar t={t} />

      <main>
        <Hero t={t} />
        <About t={t} />
        <WhyStay t={t} />
        <LaPaz t={t} />
        <ThingsToDo t={t} />
        <Restaurants t={t} />
        <Contact t={t} />
        <ContactForm t={t} />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang" element={<Page />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
