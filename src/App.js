import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Skills from "./components/Skills/Skills";
import "./App.css";

function App() {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
