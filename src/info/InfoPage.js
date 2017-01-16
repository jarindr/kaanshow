import { Link } from 'react-router'
import React from 'react'
import styles from './InfoPage.styl'
const InfoPage = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.sideNavContainer}>
          <ul>
            <li>INFO & DOWNLOAD</li>
            <Link to={'/info/news'}>
              <li style={{color: window.location.pathname.split('/')[2] === 'news' ? 'white' : '#9f9f9f'}}>NEWS</li>
            </Link>
            <Link to={'/info/download'}>
              <li style={{color: window.location.pathname.split('/')[2] === 'download' ? 'white' : '#9f9f9f'}}>DOWNLOAD</li>
            </Link>
            <Link to={'/info/term'}>
              <li style={{color: window.location.pathname.split('/')[2] === 'term' ? 'white' : '#9f9f9f'}}>TERMS & CONDITIONS</li>
            </Link>
            <Link to={'/info/disclaimer'}>
              <li style={{color: window.location.pathname.split('/')[2] === 'disclaimer' ? 'white' : '#9f9f9f'}}>DISCLAIMER</li>
            </Link>
            <Link to={'/info/privacy'}>
              <li style={{color: window.location.pathname.split('/')[2] === 'privacy' ? 'white' : '#9f9f9f'}}>PRIVACY</li>
            </Link>
            <Link to={'/info/faq'}>
              <li style={{color: window.location.pathname.split('/')[2] === 'faq' ? 'white' : '#9f9f9f'}}>FAQ</li>
            </Link>
          </ul>
        </div>
        <div className={styles.contentContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default InfoPage
