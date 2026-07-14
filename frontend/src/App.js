import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initSmoothScroll } from "./utils/smoothScroll";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { WhySOGIP } from "./pages/WhySOGIP";
import { MasterPlan } from "./pages/MasterPlanEnhanced";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { LogoShowcase } from "./pages/LogoShowcase";
import { News } from "./pages/News";

function App() {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-sogip" element={<WhySOGIP />} />
          <Route path="/master-plan" element={<MasterPlan />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/logo-showcase" element={<LogoShowcase />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
