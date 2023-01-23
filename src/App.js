import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Discover";
import Events from "./Pages/Events";
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
                <Link to="/rankings" className="navlink">
                  {" "}
                  Rankings{" "}
                </Link>
              </div>
            </li>

            <li>
              <div className="anchor">
                <Link to="/events" className="navlink">
                  {" "}
                  Events{" "}
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <main className="main-class">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <footer>
        <div class="wrapper">
          <nav className="footer-nav">
            <a href="/">Discover</a>
            <a href="/events">Events</a>
            <a href="/rankings">Rankings</a>
            
          </nav>
        </div>
      </footer>
    </Router>
  );
}

export default App;
