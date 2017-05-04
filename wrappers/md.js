import React from "react";
import moment from "moment";
import Helmet from "react-helmet";
import ReadNext from "../components/ReadNext";
import { rhythm } from "utils/typography";
import { config } from "config";
import Bio from "components/Bio";
import { Link } from "react-router";
import { blogs, getSiblingBlogs } from "../utils/pages";
import { Row, Col } from "react-grid-system";
import { Line } from "rc-progress";

import "../css/zenburn.css";
import "./md.less";

class MarkdownWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      hide: false,
      progress: 0
    };
  }

  componentWillMount() {
    const self = this;
    window.addEventListener("scroll", e => {
      const header = document.querySelector(".article-header");
      self.setState({
        progress: parseInt(
          (document.body.scrollTop + window.innerHeight) /
            document.body.clientHeight *
            100,
          10
        )
      });
      if (document.body.scrollTop > header.clientHeight) {
        self.setState({
          hide: true
        });
      } else {
        self.setState({
          hide: false
        });
      }
    });
  }

  mouseEnterHandler() {
    this.setState({
      hide: false
    });
  }

  renderHeader() {
    const { route } = this.props;
    const { previous, next } = getSiblingBlogs(route.path, blogs("dateDesc"));

    return (
      <nav
        className={`article-header ${this.state.hide ? "collapse" : ""}`}
        onMouseEnter={this.mouseEnterHandler.bind(this)}
      >
        <div
          className={`content article-title ${this.state.hide ? "show" : ""}`}
        >
          {route.page.data.title}
        </div>
        <Row className={`content ${this.state.hide ? "" : "show"}`}>
          <Col className="left" md={4}>
            {previous
              ? <Link to={previous.path}>
                  <div className="fingerpost">PREVIOUS</div>
                  <div>{previous.data.title}</div>
                </Link>
              : null}
          </Col>
          <Col className="center" md={4}>
            <Link to="/">
              <img className="logo" src={config.logo} alt="logo" />
            </Link>
          </Col>
          <Col className="right" md={4}>
            {next
              ? <Link to={next.path}>
                  <div className="fingerpost">NEXT</div>
                  <div>{next.data.title}</div>
                </Link>
              : null}
          </Col>
        </Row>
      </nav>
    );
  }

  mousemoveHandler() {
    const header = document.querySelector(".article-header");
    if (document.body.scrollTop > header.clientHeight) {
      this.setState({
        hide: true
      });
    }
  }

  render() {
    const { route } = this.props;
    const post = route.page.data;
    return (
      <div
        className="markdown"
        style={{
          padding: `100px ${rhythm(3)} ${rhythm(1)} ${rhythm(3)}`
        }}
      >
        <Helmet title={`${post.title} | ${config.blogTitle}`} />
        <Line
          className="page-progress"
          percent={this.state.progress}
          strokeWidth="0.2"
          strokeColor="#98C9FB"
          trailColor="rgba(0,0,0,0)"
        />
        {this.renderHeader()}
        <h1 style={{ marginTop: 0 }}>{post.title}</h1>
        <div
          style={{
            display: "block",
            marginBottom: rhythm(2)
          }}
        >
          <span>
            Posted on {moment(post.date).format("MMMM D, YYYY")}
          </span>
          {"  |  "}
          <span id="busuanzi_container_page_pv">
            <span id="busuanzi_value_page_pv" /> views
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <hr
          style={{
            marginBottom: rhythm(2)
          }}
        />

      </div>
    );
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
};

export default MarkdownWrapper;
