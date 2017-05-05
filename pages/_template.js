import React from "react";
import { Container } from "react-grid-system";
import { prefixLink } from "gatsby-helpers";
import { rhythm, scale } from "utils/typography";
import { config } from "config";
import Helmet from "react-helmet";
import Header from "components/Header";
import Footer from "components/Footer";

class Template extends React.Component {
  renderHeader() {
    const location = this.props.location.pathname;
    switch (location) {
      case "/":
      case "/articles/":
        return <Header/>;
      default:
        return null;
    }
  }

  renderFooter() {
    switch (this.props.location.pathname) {
      case "/":
        return null;
      default:
        return <Footer />;
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            { name: "description", content: "Yvonne Zhang's Blog" },
            { name: "keywords", content: "blog, articles" }
          ]}
        />
        <Container
          style={{
            padding: `${rhythm(2)} 0`
          }}
        >
          {this.renderHeader()}
          {children}
        </Container>
        {this.renderFooter()}
      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  route: React.PropTypes.object
};

export default Template;
