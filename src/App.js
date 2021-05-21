import React from "react";
import "./styles/app.css";
import Home from "./components/Home";
import Students from "./components/studentpage/Students";
import WincLogo from "./assets/logo_wincAcademy.jpg";
import Container from "./Container";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="break" />
        <header className="header">
          <img id="headerLogoWinc" src={WincLogo} alt="logowinc" />
          <h2>STUDENT DASHBOARD </h2>
        </header>
        <nav>
          <ul className="nav">
            <li>
              <Link className="link" to="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link className="link" to="/container">
                <p>Show results</p>
              </Link>
            </li>
            <li>
              <Link className="link" to="/students">
                <p>Students</p>
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/container">
            <Container />
          </Route>
          <Route path="/students">
            <Students />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
