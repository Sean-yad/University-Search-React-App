import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Rankings from "./Pages/Rankings";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <div className="anchor">
              <Link to="/" className="navlink">
                {" "}
                Home{" "}
              </Link>
            </div>
          </li>
          <li>
            <div className="anchor">
              <Link to="/about" className="navlink">
                {" "}
                About{" "}
              </Link>
            </div>
          </li>

          <li>
            <div className="anchor">
              <Link to="/rankings" className="navlink">
                {" "}
                Rankings{" "}
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rankings" element={<Rankings />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <footer>
        <div class="wrapper">
          <nav className="footer-nav">
            <a href="/">Home</a>
            <a href="/Portfolio">Portfolio</a>
            <a href="/Resume">Resume</a>
          </nav>
        </div>
      </footer>
    </Router>
  );
}

export default App;
