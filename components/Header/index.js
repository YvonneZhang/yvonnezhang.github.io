import React from "react";
import { rhythm } from "utils/typography";
import { Link } from "react-router";
import "./index.less";
import { config } from "config";

export default () => {
  return (
    <header>
      <Link to={"/"}>
        <img className="logo" src={config.logo} alt="Logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to={"/articles/"}>
              Articles
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              Resume
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
