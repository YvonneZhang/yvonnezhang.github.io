import React from "react";
import { Container } from "react-grid-system";
import { prefixLink } from "gatsby-helpers";
import { rhythm, scale } from "utils/typography";
import { config } from "config";
import Helmet from "react-helmet";
import Header from "components/Header";

class Template extends React.Component {
  renderHeader() {
    switch (this.props.location.pathname) {
      case '/':
      case '/articles/':
        return <Header />;
      default:
        return null;
    }
  }

  render() {
    const { children } = this.props;

    return (
      <Container
        style={{
          // maxWidth: rhythm(24),
          padding: `${rhythm(2)} 0`

        }}
      >
        <Helmet
          title={config.blogTitle}
          meta={[
            { name: "description", content: "Yvonne Zhang's Blog" },
            { name: "keywords", content: "blog, articles" }
          ]}
        />
        {this.renderHeader()}
        {children}
      </Container>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  route: React.PropTypes.object
};

export default Template;
