import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseMe from "./components/WhyChooseMe";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <WhyChooseMe />
                  <Services />
                  <Portfolio />
                  <Testimonials />
                  <Pricing />
                  <Contact />
                </>
              }
            />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
