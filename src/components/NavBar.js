import { Link } from 'react-router'
import React from 'react'
import cx from 'classnames'
import styles from './NavBar.styl'
const NavBar = React.createClass({
  getInitialState () {
    return {
      mobileMenu: false
    }
  },
  onClickHamberger () {
    this.setState({mobileMenu: !this.state.mobileMenu})
  },
  render () {
    const classNameNav = cx([styles.navigationContainer], {[styles.active]: this.state.mobileMenu})
    return (
      <div className={styles.container}>
        <div className={styles.navigationLogo}>
          <Link to='/'><img src={require('../assets/images/KAAN_Logo-for-Programmer_ch.png')} /></Link>
        </div>
        <div id="hamberger-menu" onClick={this.onClickHamberger}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={classNameNav}>
          <span className={styles.navItem} style={{color: 'white'}}><Link to='/'>KAAN SHOW</Link></span>
          <span className={styles.navItem}><a href='https://d-luck.firebaseapp.com/' target='_blank'>D'LUCK</a></span>
          <span className={styles.navItem}><a href='https://punjaluck-a28c1.firebaseapp.com/' target='_blank'>PANJALUCK</a></span>
          <span className={styles.navItem}>LANGUAGE</span>
          <span className={styles.navItem}>
            <img src={require('../assets/images/Untitled 2.png')} className={styles.search} />
          </span>
          <Link to='/ticket/type/' target='_blank'><span className={`${styles.navItem} ${styles.ticket}`}>TICKET</span></Link>
        </div>
      </div>
    )
  }
})

module.exports = NavBar
