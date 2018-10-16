import React from 'react'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import { GoogleFont, TypographyStyle } from 'react-typography'
import typography from './utils/typography'
import { config } from 'config'
import logo from './images/favicon.jpg'

const GOOGLE_ANALYSIS_ID = config.google_analysis_id
const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string
  },
  render () {
    const { body } = this.props
    const head = Helmet.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!./public/styles.css')
          }}
        />
      )
    }

    return (
      <html lang='en'>
        <head>
          <link rel='icon' href={logo} type='image/x-icon' />
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {css}
          <link href='https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css' type='stylesheet' />
        </head>
        <body>
          <div id='react-mount' dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYSIS_ID}`} />
          <script dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYSIS_ID}');`
          }} />
        </body>
      </html>
    )
  }
})
