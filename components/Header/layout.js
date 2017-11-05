import React from 'react'
import {Link} from 'react-router'
import {config} from 'config'
import './index.less'

const defaultCenter = (
  <Link to={'/'}>
    <div className='logo' style={{backgroundImage: `url(${config.logo})`}} />
  </Link>
)

export default ({left, center, right, extend, className, onMouseEnter}) => {
  return (
    <header onMouseEnter={onMouseEnter} className={className}>
      <nav>
        <div className='item left'>
          {left}
        </div>
        <div className='item center'>
          {center || defaultCenter}
        </div>
        <div className='item right'>
          {right}
        </div>
      </nav>
      {extend}
    </header>
  )
}
