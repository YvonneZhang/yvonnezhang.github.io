import { config, pages } from "config";
import findIndex from "lodash/findIndex";

export function getSiblingBlogs(pathname, blogs) {
  const index = findIndex(blogs, ({ path }) => {
    return path === pathname;
  });
  const previous = blogs[index + 1];
  const next = blogs[index - 1];
  return {
    previous,
    next
  };
}

export function blogs(sortBy) {
  let compareFunc;
  switch (sortBy) {
    case "date":
      compareFunc = (a, b) => {
        const dateA = new Date(a.data.date).getTime();
        const dateB = new Date(b.data.date).getTime();
        if (dateA < dateB) {
          return -1;
        }
        if (dateA > dateB) {
          return 1;
        }
        return 0;
      };
      break;
    case "dateDesc":
      compareFunc = (a, b) => {
        const dateA = new Date(a.data.date).getTime();
        const dateB = new Date(b.data.date).getTime();
        if (dateA < dateB) {
          return 1;
        }
        if (dateA > dateB) {
          return -1;
        }
        return 0;
      };
      break;
    default:
      compareFunc = () => 0;
      break;
  }
  return pages
    .filter(({ file }) => {
      return file.dirname === "blogs";
    })
    .sort(compareFunc);
}
