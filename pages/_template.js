import React from 'react'
import Blog from 'templates/blog'

export default props => {
  switch (props.location.pathname) {
    // case '/resume/':
    //   return <Blank {...props} />
    default:
      return <Blog {...props} />
  }
}
