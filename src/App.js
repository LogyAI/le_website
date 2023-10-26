import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Index.js";
import AboutusPage from "./pages/Aboutus.js";
import ProductsPage from "./pages/Products.js";
import ArticlesPage from "./pages/Articles.js";
import GetintouchPage from "./pages/Getintouch.js";
import EyePage from "./pages/Eye.js";
import OralPage from "./pages/Oral.js";
import Cs1 from "./caseStudies/cs1.jsx";
import ScrollToTop from "./assets/components/scrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        {/* <Route path="/aboutus" element={<AboutusPage />} /> */}
        <Route exact path="/" element={<IndexPage />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/contact" element={<GetintouchPage />} />

        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/oral" element={<OralPage />} />

        <Route path="/eye" element={<EyePage />} />
        <Route path="/cs_kenya" element={<Cs1 />} />
      </Routes>
    </div>
  );
}

export default App;
