import './Layout.global.styl'

import Helmet from 'react-helmet'
import NavBar from '../components/NavBar'
import React from 'react'
import styles from './layout.styl'

const Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },
  render () {
    return (
      <div>
        <Helmet
          titleTemplate=''
          defaultTitle=''
          script={[{
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
          <div className={styles.singLogoContainer}>
            <img src={require('../assets/images/singha.png')} />
            <div classes={styles.singCaption}>SINGHA CORPORATION</div>
          </div>
        </div>
      </div>
    )
  }
})

export default Layout
