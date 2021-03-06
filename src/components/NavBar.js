import LanguageDropdown from './languageDropdown'
import { Link } from 'react-router'
import React from 'react'
import SearchInput from './SearchInput'
import cx from 'classnames'
import styles from './NavBar.styl'
const NavBar = React.createClass({
  getInitialState () {
    return {
      mobileMenu: false
    }
  },
  onClickHamberger () {
    this.setState({ mobileMenu: !this.state.mobileMenu })
  },
  onClickSearch () {
    this.setState({search: !this.state.search})
  },
  render () {
    const classNameNav = cx([styles.navigationContainer], { [styles.active]: this.state.mobileMenu })
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
          <div className={styles.languageDropdownMobile}>
            <LanguageDropdown
              selectOptions={['TH', 'EN', 'JP', 'CN']}
              selectIndex={0}
              onChange={this.onSelectChange}
            />
          </div>
          <span className={styles.navItem} style={{ color: 'white' }}><a href='/'>KAAN SHOW</a></span>
          <span className={styles.navItem}><a href='https://d-luck.firebaseapp.com/' target='_blank'>D'LUCK</a></span>
          <span className={styles.navItem}><a href='https://punjaluck-a28c1.firebaseapp.com/' target='_blank'>PANJALUCK</a></span>
          <span className={`${styles.navItem} ${styles.languageDropdown}`}>
            <LanguageDropdown
              selectOptions={['TH', 'EN', 'JP', 'CN']}
              selectIndex={0}
              onChange={this.onSelectChange}
            />
          </span>
          <span className={styles.navItem}>
            <img src={require('../assets/images/Untitled 2.png')} className={styles.search} onClick={this.onClickSearch} />
            <SearchInput active={this.state.search} />
          </span>
          <Link to='/ticket/type/' target='_blank'><span className={`${styles.navItem} ${styles.ticket}`}>TICKET</span></Link>
        </div>
      </div>
    )
  }
})

module.exports = NavBar
