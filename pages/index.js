import React from 'react'
import { Link } from 'react-router'
import { sortBy, get } from 'lodash'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import Helmet from "react-helmet"
import { config } from 'config'
import include from 'underscore.string/include'
import { Container, Row, Col } from 'react-grid-system';
import Bio from 'components/Bio'
import './index.less'


const LatestArticles = ({pages}) => {
  // Sort pages.
  const sortedPages = sortBy(pages, 'data.date').reverse();
  // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
  const visiblePages = sortedPages.filter(page => (
    get(page, 'file.ext') === 'md' && !include(page.path, '/404') || get(page, 'data.date')
  ))
  const last2Pages = visiblePages.slice(0, 2);
  return <section>
  <Row>
  {last2Pages.map((page) => (

        <Col
        md={4}
          key={page.path}
          style={{
              marginBottom: rhythm(1/3),
          }}
        >
          <Link style={{boxShadow: 'none'}} to={prefixLink(page.path)}>
              {get(page, 'data.title', page.path)}
          </Link>
        </Col>
    ))}
  </Row>
  </section> 
}


class BlogIndex extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            {"name": "description", "content": "Yvonne Zhang's Blog"},
            {"name": "keywords", "content": "blog, articles"},
          ]}
        />
        <img src="https://lh3.googleusercontent.com/7PJUQKxtuBqrkPjMAllJeFyFDjmHsZOEABPniMyGcZoCoZiY-rYwoFNJskY6Slk_epsVHWqVd_3RV5RG5n-4VyPLn_V9l4NBt5XTAllx82BmrT6oquk1ujssyksWIJsEzrdkVskHzYKieOre6nEg46ugL2YBveb3J14pIRo2XDjjncsK9ykgsEd4x8U14r6wncxpKPtrPskBQs_u5VigefD8r0tzJm8X1gRxNVhcddbdhq587PBedJjpYnsRgdXhjT4YWK7POfNDa9fuIyUu0UadRcD_N-3oj92E9yJi-nb6xtdcq-m3lEyQQGZSIT4dRYkyCGNRhKDyn8n4Fm6m3cAqeDa3ca9O6wDlFgAJ1yIaDMa31AWeR1U_dpDXKZpFIq86feucPxM6WzGPkfEfHUhr8mFX6eF3ecZUaIw6VgNvfraDBrm6Yu8S9dH1ST6vm0KJlx_4GiAvO8-0MBrzFjQlxxeaNIJ5p42SGqn12DdAAyVz9ymEnQ2Vn0kvelmL58Y6Pu1BBQSokalZzD6dOru5qdnZ3lw4CUdwjptTgVopx4ZjMYQ6k-EExDyAK0VC05zbnTSWqOrV7vj0SoyjOQN7CDP8iKly5c96FtL5LvwlTWcdvE-Nfg=w1174-h1564-no" className="side-image"/>
        <Row>
          <Col md={6}>
            <Bio />
          </Col>
        </Row>
        <LatestArticles pages={this.props.route.pages}/>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
