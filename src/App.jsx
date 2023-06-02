import { BrowserRouter } from "react-router-dom";

import {
  About,
  // Contact,
  // Feedbacks,
  // Hero,
  // Navbar,
  // StarsCanvas,
  // Tech,
  // Works
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <About />
      </div>
    </BrowserRouter>
  );
};

export default App;
