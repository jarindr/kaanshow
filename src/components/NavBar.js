import React from 'react'
import styles from './NavBar.styl'

const NavBar = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.navigationLogo}>
          <img src={require('../assets/images/KAAN_Logo-for-Programmer_ch.png')} />
        </div>
        <div className={styles.navigationContainer}>
          <span className={styles.navItem} style={{color: 'white'}}>KAAN SHOW</span>
          <span className={styles.navItem}>D'LUCK</span>
          <span className={styles.navItem}>PANJALUCK</span>
          <span className={styles.navItem}>LANGUAGE</span>
          <span className={styles.navItem}>
            <i className='flaticon-search'></i>
          </span>
          <span className={`${styles.navItem} ${styles.ticket}`}>TICKET</span>
        </div>
      </div>
    )
  }
})

module.exports = NavBar
