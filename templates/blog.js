import React from 'react'
import { Container } from 'react-grid-system'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Helmet from 'react-helmet'
import Header from 'components/Header'
import Footer from 'components/Footer'
import 'css/zenburn.css'
import 'css/blog.less'

class Template extends React.Component {
  renderHeader () {
    const location = this.props.location.pathname
    if (location.indexOf('/blogs/') > -1) {
      return null
    }
    return <Header />
  }

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
        {this.renderHeader()}
        <Container
          style={{
            padding: `${rhythm(4)} 0 0 0`
          }}
        >
          {children}
        </Container>
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  route: React.PropTypes.object
}

export default Template
