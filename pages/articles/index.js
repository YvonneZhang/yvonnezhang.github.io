import React from "react";
import { Link } from "react-router";

const renderList = pages => {
  return pages
    .filter(page => page.file.path.indexOf("blogs/") > -1)
    .sort((a, b) => {
      const dateA = new Date(a.data.date).getTime();
      const dateB = new Date(b.data.date).getTime();
      if (dateA < dateB) {
        return 1;
      }
      if (dateA > dateB) {
        return -1;
      }
      return 0;
    })
    .map(page => (
      <li key={page.path}>
        <Link to={page.path}>
          {page.data.title}
        </Link>
        <span>{new Date(page.data.date).toLocaleDateString()}</span>
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
