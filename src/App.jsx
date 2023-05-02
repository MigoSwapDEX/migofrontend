import { BrowserRouter } from "react-router-dom";

import {
  About,
  Hero,
  Navbar,
  Trade,
  Earn,
  MigoFriends,
  StarsCanvas,
  Ido,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="relative z-0">
          <Trade />
          <StarsCanvas />
        </div>
        <Earn />
        <div className="relative z-0">
          <MigoFriends />
          <StarsCanvas />
        </div>
        <Ido/>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
