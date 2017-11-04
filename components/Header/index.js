import React from "react";
import { rhythm } from "utils/typography";
import { Link } from "react-router";
import { config } from "config";
import "./index.less";

export default () => {
  return (
    <header>
      <nav>
        <Link to={"/articles/"} activeClassName="active">
          ARTICLES
        </Link>
        <Link to={"/"}>
          <img className="logo" src={config.logo} alt="Logo" />
        </Link>
        <Link to={"/resume"} activeClassName="active">
          RESUME
        </Link>
        {/*
        <Link to={"/g"} activeClassName="active">
          Contact
        </Link>*/}
      </nav>
    </header>
  );
};
