import React from 'react'
import { Container } from 'react-grid-system'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Helmet from 'react-helmet'
import Header from 'components/Header'
import Footer from 'components/Footer'

class Template extends React.Component {
  renderHeader () {
    const location = this.props.location.pathname
    if (location.indexOf('/blogs/') > -1) {
      return null
    }
    return <Header />
    // switch (location) {
    //   case "/":
    //   case "/articles/":
    //     return <Header />;
    //   default:
    //     return null;
    // }
  }

  renderFooter () {
    return <Footer />
    // switch (this.props.location.pathname) {
    //   case "/":
    //   case "/resume/":
    //     return null;
    //   default:
    //     return <Footer />;
    // }
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
        {this.renderFooter()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  route: React.PropTypes.object
}

export default Template
