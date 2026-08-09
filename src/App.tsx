import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 sm:px-10">
      <Navbar />

      <main id="main-content" className="w-full min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 position-relative py-24">
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
