import About from "./About/About";
import "./app.scss";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/Parallax/Parallax";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div>
      <Cursor></Cursor>
      <section id="Home">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section>
        <Parallax type="services"></Parallax>
      </section>
      <section id="Services">
        <Services></Services>
      </section>
      <section>
        <Parallax type="portfolio"></Parallax>
      </section>
      <section id="Portfolio">
        <Portfolio></Portfolio>
        <section id="Contact">
          <Contact></Contact>
          <section  id="About"><About></About></section>
        </section>
      </section>
   
    </div>
  );
}

export default App;
