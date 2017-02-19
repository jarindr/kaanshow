import './Layout.global.styl'

import Helmet from 'react-helmet'
import NavBar from '../components/NavBar'
import React from 'react'
import styles from './layout.styl'

const Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },
  getInitialState () {
    return {
      showCopyright: false
    }
  },
  componentDidMount () {
    window.addEventListener('scroll', () => {
      if ($(window).scrollTop() + $(window).innerHeight() >= $('body').height() - 500) {
        this.setState({ showCopyright: true })
      } else {
        this.setState({ showCopyright: false })
      }
    })
  },
  onClickToTop () {
    window.scrollTo(0, 0)
  },
  render () {
    return (
      <div>
        <Helmet
          titleTemplate=''
          defaultTitle=''
          script={[{
            src: 'https://cdn.polyfill.io/v2/polyfill.min.js'
          }]}
          link={[
            {
              href: '',
              rel: 'stylesheet'
            }
          ]}
          meta={[
          ]}
        />
        <NavBar />
        {this.props.children}
        <div className={styles.singLogo}>
          <div className={styles.copyright} style={{ display: this.state.showCopyright ? 'block' : 'none' }}>
            © 2017 PANJALUCK PASUK CO. , LTD. ALL RIGHTS RESERVED.
          </div>
          <div className={styles.singLogoContainer} style={{top: this.state.showCopyright ? 0 : '10px'}}>
            <img src={require('../assets/images/singha.png')} />
            <span onClick={this.onClickToTop} className={styles.toTop} style={{ display: this.state.showCopyright ? 'block' : 'none' }}>
              TO THE TOP <img src={require('../assets/images/to_top.png')} style={{width: '15px'}} />
            </span>
          </div>
        </div>
      </div>
    )
  }
})

export default Layout
