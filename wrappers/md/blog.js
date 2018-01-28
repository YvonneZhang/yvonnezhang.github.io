import React from 'react'
import moment from 'moment'
import Helmet from 'react-helmet'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import { Link } from 'react-router'
import { blogs, getSiblingBlogs } from 'utils/pages'
import { Line } from 'rc-progress'
import HeaderLayout from 'components/Header/layout'
import debounce from 'lodash/debounce'

import './blog.less'

class MarkdownWrapper extends React.Component {
  constructor () {
    super()
    this.state = {
      hide: false,
      progress: 0
    }
  }

  setProgress () {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    const progress = parseInt(
      (offset + window.innerHeight) / document.body.clientHeight * 100,
      10
    )
    this.setState({
      progress
    })
    return progress
  }

  componentDidMount () {
    this.setProgress()
    window.addEventListener('scroll', debounce(
      () => {
        const progress = this.setProgress()
        if (progress > 10) {
          this.setState({
            hide: true
          })
        } else {
          this.setState({
            hide: false
          })
        }
      },
      10
    ))
  }

  renderHeader () {
    const {route} = this.props
    const {previous, next} = getSiblingBlogs(route.path, blogs('dateDesc'))
    const title = route.page.data.title
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
    const center = (
      <div className='article-title'>
        {title}
      </div>
    )
    const progress = (
      <Line percent={this.state.progress} strokeWidth={0.1} trailColor='rgba(0,0,0,0)' strokeColor='#bf9000' className='page-progress' />
    )
    return <HeaderLayout
      className='md-header'
      left={left}
      center={this.state.hide ? center : null}
      right={right}
      extend={progress}
      onMouseEnter={() => {
        this.setState({
          hide: false
        })
      }}
    />
  }

  render () {
    const {route} = this.props
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
        <h1 style={{marginTop: 0}}>{post.title}</h1>
        <div className='post-date'>
          <span>Posted on {moment(post.date).format('MMMM D, YYYY')}</span>
          {'  |  '}
          <span id='busuanzi_container_page_pv'>
            <span id='busuanzi_value_page_pv' /> views
          </span>
        </div>
        <div dangerouslySetInnerHTML={{__html: post.body}} />
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
}

export default MarkdownWrapper
