import React from "react";
import moment from "moment";
import { Link } from "react-router";
import { config } from "config";
import { blogs } from "../../utils/pages";
import "./index.less";

const getHtmlText = html => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  return wrapper.innerText.replace(/\s+/g, " ").slice(0, 100) + "...";
};

const renderCard = page => {
  const date = moment(page.data.date).format("MMMM D, YYYY");
  return (
    <Link to={page.path}>
      <div className="article-card">
        <div className="title">{page.data.title}</div>
        <div className="divider" />
        <p className="brief">
          {getHtmlText(page.data.body)}
        </p>
        <div className="date">{date}</div>
      </div>
    </Link>
  );
};

const renderList = () => {
  return blogs("dateDesc").map(page => (
    <div key={page.path}>
      {renderCard(page)}
    </div>
  ));
};

const Articles = ({ route }) => {
  const { pages } = route;
  return (
    <div>
      {renderList()}
    </div>
  );
};

Articles.propTypes = {
  route: React.PropTypes.object
};

export default Articles;
