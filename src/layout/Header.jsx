import React from "react";

const Header = () => {
  return (
    <nav className=" light-blue">
      <div className="nav-wrapper  light-blue">
        <a href="#" className="brand-logo  light-blue">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down  light-blue">
          <li>
            <a href="#">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
