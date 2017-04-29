import React from "react";
import { Link } from "react-router";

const renderList = pages => {
  return pages
    .filter(page => page.file.path.indexOf("blogs/") > -1)
    .map(page => (
      <li key={page.path}>
        <Link to={page.path}>
          {page.data.title}
        </Link>
      </li>
    ));
};

const Articles = ({ route }) => {
  const { pages } = route;
  return (
    <div>
      <ul>
        {renderList(pages)}
      </ul>

    </div>
  );
};

Articles.propTypes = {
  route: React.PropTypes.object
};

export default Articles;
