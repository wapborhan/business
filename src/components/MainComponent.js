import React from "react";
import Header from "./pages/header/Header";
import About from "./pages/about/About";
import Apporch from "./pages/apporch/Apporch";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer";

export default function MainComponent() {
  return (
    <div>
      <Header />
      <About />
      <Apporch />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
