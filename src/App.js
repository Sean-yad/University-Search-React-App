import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Rankings from "./Pages/Rankings";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <div className="nav-container">
        <nav className="flex-container">
          <div className="logo-ul">
            <li>
              <div className="logo-div">
                <h1 className="logo">
                  <Link to="/"> University Search </Link>
                </h1>
              </div>
            </li>
          </div>
        </nav>
        <nav>
          <ul className="unordered-list">
            <li>
              <div className="anchor">
                <Link to="/" className="navlink">
                  {" "}
                  Discover{" "}
                </Link>
              </div>
            </li>
            <li>
              <div className="anchor">
                <Link to="/about" className="navlink">
                  {" "}
                  Events{" "}
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
      </div>
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
            <a href="/">Discover</a>
            <a href="/about">Events</a>
            <a href="/rankings">Rankings</a>
          </nav>
        </div>
      </footer>
    </Router>
  );
}

export default App;
