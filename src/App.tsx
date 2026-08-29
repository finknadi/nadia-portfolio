import { DayBake } from './pages/DayBake';
import { Swisswatch } from './pages/Swisswatch';
import { LocalLoop } from "./pages/LocalLoop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
// import Blog from "./pages/Blog";
// import CaseStudies from "./pages/CaseStudies";
import { Contact } from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-bg-page text-neutral-200 font-sans">
        <Navbar />

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/case-studies" element={<CaseStudies />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/daybake" element={<DayBake />} />
            <Route path="/projects/swisswatch" element={<Swisswatch />} />
            <Route path="/projects/local-loop" element={<LocalLoop />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;