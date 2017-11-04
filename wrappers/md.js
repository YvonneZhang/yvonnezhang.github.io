import React from 'react'
import moment from 'moment'
import Helmet from 'react-helmet'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import { Link } from 'react-router'
import { blogs, getSiblingBlogs } from '../utils/pages'
import { Line } from 'rc-progress'
import HeaderLayout from 'components/Header/layout'

import '../css/zenburn.css'
import './md.less'

class MarkdownWrapper extends React.Component {
  constructor () {
    super()
    this.state = {
      hide: false,
      progress: 0
    }
  }

  componentDidMount () {
    const self = this
    window.addEventListener('scroll', e => {
      const header = document.querySelector('.article-header')
      self.setState({
        progress: parseInt(
          (document.body.scrollTop + window.innerHeight) /
            document.body.clientHeight *
            100,
          10
        )
      })
      if (document.body.scrollTop > header.clientHeight) {
        self.setState({
          hide: true
        })
      } else {
        self.setState({
          hide: false
        })
      }
    })
  }

  mouseEnterHandler () {
    this.setState({
      hide: false
    })
  }

  renderHeader () {
    const { route } = this.props
    const { previous, next } = getSiblingBlogs(route.path, blogs('dateDesc'))

    const left = (
      <Link to={previous && previous.path}>
        <div className='fingerpost'>PREVIOUS</div>
        <div className='title'>{previous && previous.data && previous.data.title}</div>
      </Link>
    )
    const right = (
      <Link to={next && next.path}>
        <div className='fingerpost'>NEXT</div>
        <div className='title'>{next && next.data && next.data.title}</div>
      </Link>
    )
    return <HeaderLayout
      className='md-header'
      left={left}
      right={right}
    />
  }

  mousemoveHandler () {
    const header = document.querySelector('.article-header')
    if (document.body.scrollTop > header.clientHeight) {
      this.setState({
        hide: true
      })
    }
  }

  render () {
    const { route } = this.props
    const post = route.page.data
    return (
      <div
        className='markdown'
        style={{
          padding: `${rhythm(1)} ${rhythm(3)}`
        }}
      >
        <Helmet title={`${post.title} | ${config.blogTitle}`} />
        {this.renderHeader()}
        <h1 style={{ marginTop: 0 }}>{post.title}</h1>
        <div className='post-date'>
          <span>Posted on {moment(post.date).format('MMMM D, YYYY')}</span>
          {'  |  '}
          <span id='busuanzi_container_page_pv'>
            <span id='busuanzi_value_page_pv' /> views
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
}

export default MarkdownWrapper
