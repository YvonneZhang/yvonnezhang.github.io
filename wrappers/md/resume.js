import React from 'react'
import { config } from 'config'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import './resume.less'

export default (props) => {
  const {route} = props
  const post = route.page.data
  const isChinese = (route.page.path).indexOf('/ch/') > -1
  const title = isChinese ? '简历' : 'Résumé'
  return (
    <div className={`resume ${isChinese ? 'black' : ''}`}>
      <Helmet title={`${title} | ${config.blogTitle}`} />
      <div className='background' />
      <nav>
        {
          isChinese
            ? <Link to='/resume/'>EN</Link>
            : <Link to='/resume/ch/'>中文</Link>
        }
      </nav>
      <div className='inner' dangerouslySetInnerHTML={{__html: post.body}} />
    </div>
  )
}
