import React from 'react'
import { rhythm } from 'utils/typography'
import { Link } from 'react-router'
import './index.less'

export default () => {
  return <header>
    <Link to={'/'}>
      <img className="logo" src="http://7xl4xb.com1.z0.glb.clouddn.com/favicon.ico" alt="Logo"/>         
    </Link>
    <nav>
      <ul>
        <li>
          <Link to={'/'}>
            Articles
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            Resume
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
}