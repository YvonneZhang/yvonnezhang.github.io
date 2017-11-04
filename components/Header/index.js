import React from 'react'
import {Link} from 'react-router'
import './index.less'
import Layout from './layout'

export default () => {
  const left = (
    <Link to={'/articles/'} activeClassName='active'>
      ARTICLES
    </Link>
  )
  const right = (
    <Link to={'/resume'} activeClassName='active'>
      RESUME
    </Link>
  )
  return <Layout
    left={left}
    right={right}
  />
}
