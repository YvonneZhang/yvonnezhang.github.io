import React from "react";
import { rhythm } from "utils/typography";
import { Link } from "react-router";
import { config } from "config";
import "./index.less";

export default () => {
  return (
    <header>
      <nav>
        <Link to={"/"}>
          <img className="logo" src={config.logo} alt="Logo" />
        </Link>
        <Link to={"/articles/"} activeClassName="active">
          Articles
        </Link>
        <Link to={"/a"} activeClassName="active">
          Résumé
        </Link>
        <Link to={"/g"} activeClassName="active">
          Contact
        </Link>
      </nav>
    </header>
  );
};
