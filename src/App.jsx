import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import PageLoader from "./components/layout/PageLoader";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <PageLoader onComplete={() => setLoading(false)} />
      ) : (
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      )}
    </>
  );
}

export default App;