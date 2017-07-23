import React from "react";
import Helmet from "react-helmet";
import { prefixLink } from "gatsby-helpers";
import { GoogleFont, TypographyStyle } from "react-typography";
import typography from "./utils/typography";
import { config } from "config";

const BUILD_TIME = new Date().getTime();

module.exports = React.createClass({
  displayName: "HTML",
  propTypes: {
    body: React.PropTypes.string
  },
  render() {
    const { body } = this.props;
    const head = Helmet.rewind();

    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require("!raw!./public/styles.css")
          }}
        />
      );
    }

    return (
      <html lang="en">
        <head>
          <link rel="icon" href={config.favicon} type="image/x-icon" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {css}
          <script
            async
            src="//dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js"
          />
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  }
});
