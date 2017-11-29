import React from 'react'
import Blog from './md/blog'
import Resume from './md/resume'

class MarkdownWrapper extends React.Component {
  render () {
    const {route} = this.props
    const post = route.page.data
    switch (post.layout) {
      case 'resume':
        return <Resume {...this.props} />
      default:
        return <Blog {...this.props} />
    }
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
}

export default MarkdownWrapper
