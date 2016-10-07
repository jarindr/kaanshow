import React from 'react'

import styles from './NavBar.styl'

const NavBar = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.navigationLogo}></div>
        <div className={styles.navigationContainer}>
          <span className={styles.navItem}>KAAN SHOW</span>
          <span className={styles.navItem}>D'LUCK</span>
          <span className={styles.navItem}>PANJALUCK</span>
          <span className={styles.navItem}>LANGUAGE</span>
          <span className={styles.navItem}>
            <i className='flaticon-search'></i>
          </span>
          <span className={styles.navItem}>TICKET</span>
        </div>
      </div>
    )
  }
})

module.exports = NavBar
