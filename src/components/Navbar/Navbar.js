import React from "react";


const Navbar = props => (
    <div className="container">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            Sticky Game
        </a>
        <ul className="navbar-brand">
          <li>
          <li>
            <strong>Score:</strong> {props.score} |<strong> Top Score:</strong> {props.topScore}
          </li>
          </li>
        </ul>
      </nav>
    </div>
);

export default Navbar;