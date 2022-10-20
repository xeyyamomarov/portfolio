import { useState } from "react";
import "./App.scss";
import { Contact } from "./components/Contact";
import { Intro } from "./components/Intro";
import { Portfolio } from "./components/Portfolio";
// import { Testimonials } from "./components/testimonials";
import { Topbar } from "./components/Topbar";
// import { Works } from "./components/Works";
import { Menu } from "./components/menu";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        {/* <Works /> */}
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
