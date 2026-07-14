import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { destroySmoothScroll, initSmoothScroll } from "./utils/smoothScroll";
import { Navigation } from "./components/Navigation";
import { ScrollToTop } from "./components/ScrollToTop";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { WhySOGIP } from "./pages/WhySOGIP";
import { MasterPlan } from "./pages/MasterPlanVerified";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { LogoShowcase } from "./pages/LogoShowcase";
import { News } from "./pages/News";

function App() {
  useEffect(() => {
    initSmoothScroll();
    return () => destroySmoothScroll();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[#00D4FF] focus:px-4 focus:py-3 focus:font-semibold focus:text-[#0A1628]"
          >
            Skip to main content
          </a>
          <Navigation />
          <main id="main-content" tabIndex="-1" className="outline-none">
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
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </MotionConfig>
  );
}

export default App;
