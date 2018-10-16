import React from 'react'
import { Link } from 'react-router'

import { sortBy, get } from 'lodash'
import include from 'underscore.string/include'

import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

import { Row, Col } from 'react-grid-system'
import './index.less'
import Layout from 'components/Header'
import BG from '../images/index-background.jpg'

const LatestArticles = ({ pages }) => {
  // Sort pages.
  const sortedPages = sortBy(pages, 'data.date').reverse()
  // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
  const visiblePages = sortedPages.filter(
    page =>
      (get(page, 'file.ext') === 'md' && !include(page.path, '/404')) ||
      get(page, 'data.date')
  )
  const last2Pages = visiblePages.slice(0, 2)
  return (
    <section className='latest-articles'>
      <h4>LATEST ARTICLES</h4>
      <Row>
        {last2Pages.map((page, index) => (
          <Col
            md={4}
            key={page.path}
            style={{
              marginBottom: rhythm(1 / 3),
              position: 'relative'
            }}
          >
            <Link style={{ boxShadow: 'none' }} to={prefixLink(page.path)}>
              {get(page, 'data.title', page.path)}
            </Link>
            {index < last2Pages.length - 1 ? (
              <div
                className='divider divider-vertical'
                style={{ position: 'absolute', right: 0, top: 0 }}
              />
            ) : null}
          </Col>
        ))}
      </Row>
    </section>
  )
}

class BlogIndex extends React.Component {
  render () {
    return (
      <section className='bio'>
        <div className='info'>
          <p>HI, I'M YVONNE</p>
          <p>A FRONT END DEVELOPER</p>
          <p>CURRENTLY LIVING IN SHANGHAI, CHINA</p>
          <p>WORKING @<a href='https://www.antfin.com/index.htm?locale=en_us' target='_blank'> ANT FINACIAL</a>
          </p>
        </div>
        <img src={BG} />
      </section>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object
}

export default BlogIndex
