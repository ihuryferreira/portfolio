import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import FAQ from "./sections/FAQ";
import Analytics from "./components/Analytics";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 sm:px-10">
      <Analytics />
      <Navbar />

      <main id="main-content" className="relative w-full min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 py-24">
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <FAQ />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
