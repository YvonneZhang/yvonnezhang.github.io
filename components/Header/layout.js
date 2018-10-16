import React from 'react'
import {Link} from 'react-router'
import {config} from 'config'
import './index.less'
import logo from '../../images/logo.png'

const defaultCenter = (
  <Link to={'/'} activeClassName='active'>
    <div className='logo' style={{backgroundImage: `url(${logo})`}} />
  </Link>
)

export default ({left, center, right, extend, className, onMouseEnter}) => {
  return (
    <header onMouseEnter={onMouseEnter} className={className}>
      <nav>
        {left}
        {center || defaultCenter}
        {right}
      </nav>
      {extend}
    </header>
  )
}
