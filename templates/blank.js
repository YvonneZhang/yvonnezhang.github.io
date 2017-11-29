import React from 'react'
import { config } from 'config'
import Helmet from 'react-helmet'

class Template extends React.Component {
  render () {
    const { children } = this.props

    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            { name: 'description', content: "Yvonne Zhang's Blog" },
            { name: 'keywords', content: 'blog, articles' }
          ]}
        />
        {children}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  route: React.PropTypes.object
}

export default Template
