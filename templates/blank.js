import React from "react";
import { config } from "config";
import Helmet from "react-helmet";

export default ({ children }) => (
  <div>
    <Helmet
      title={config.blogTitle}
      meta={[
        { name: "description", content: "Yvonne Zhang" },
        { name: "keywords", content: "blog, articles, resume" }
      ]}
    />
    {children}
  </div>
);
