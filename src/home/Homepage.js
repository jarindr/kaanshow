import Footer from '../components/Footer'
import IntroSection from './IntroSection'
import KaanClipSection from './KaanClipSection'
import KaanGallerySection from './KaanGallerySection'
import MakingTheShowSection from './MakingTheShowSection'
import React from 'react'
import TheStorySection from './TheStorySection'
import WorldOfKaanSection from './WorldOfKaanSection'
import { checkRectIntersection } from '../utils/intersection'
import scrollTo from 'scroll-to-element'
import styles from './HomePage.styl'
const SIDENAV = ['INTRO<br>TO KAAN', 'KAAN CLIPS', 'THE STORY', 'WORLD<br>OF KAAN', 'KAAN<br>GALLERY', 'MAKING<br>THE SHOW']
const MainPage = React.createClass({
  componentDidMount () {
    this.checkNavScroll()
    window.addEventListener('scroll', () => {
      this.checkNavScroll()
    })
  },
  getInitialState () {
    return {
      currentSection: 'INTRO-TO-KAAN',
      navigateBySide: false
    }
  },
  checkNavScroll () {
    const scrollPosition = $(window).scrollTop()
    $(`.${styles.circle}`).each((index, el) => {
      const id = $(el).attr('data-attribute')
      const $section = $(`#${id}`)
      const top = $section.offset().top - 81 - 50
      const bottom = top + $section.outerHeight(true)
      if (bottom > scrollPosition && top < scrollPosition) {
        $(el).addClass(styles.white)
      } else {
        $(el).removeClass(styles.white)
      }
    })
    const footerRect = $('#footer-hack')[0].getBoundingClientRect()
    const navRect = $(`.${styles.sideNavgationContainer}`)[0].getBoundingClientRect()
    const isCrashedtoFooter = checkRectIntersection(footerRect, navRect)
    if (isCrashedtoFooter) {
      $(`.${styles.sideNavgationContainer}`).css({opacity: 0})
    } else {
      $(`.${styles.sideNavgationContainer}`).css({opacity: 1})
    }
  },
  renderSideNav () {
    return (
      <div className={styles.sideNavgationContainer}>
        {SIDENAV.map((x, i) => this.renderCircle(x, i))}
      </div>
    )
  },
  onClickCircle (text, e) {
    const id = text.replace(/ /g, '-').replace(/<br>/g, '-')
    this.setState({currentSection: id, navigateBySide: true}, () => {
      scrollTo(`#${id}`, {
        offset: -80,
        ease: 'inOutExpo',
        duration: 1500
      })
      setTimeout(() => {
        this.setState({navigateBySide: false})
      }, 1600)
    })
  },
  renderCircle (text, i) {
    const textMarkup = () => ({__html: text})
    return (
      <div className={styles.dotNavContainer} key={i}>
        <div className={`${styles.dotNavText}`} dangerouslySetInnerHTML={textMarkup()} />
        <div className={`${styles.circle}`} data-attribute={text.replace('<br>', '-').replace(/ /g, '-')} onClick={this.onClickCircle.bind(null, text)}></div>
      </div>
    )
  },
  render () {
    return (
      <div>
        <div className={styles.container}>
          {this.renderSideNav()}
          <div ref='INTRO TO KAAN' id='INTRO-TO-KAAN' className={styles.sectionContainer}>
            <IntroSection />
          </div>
          <div ref='KAAN CLIPS' id='KAAN-CLIPS' className={styles.sectionContainer}>
            <KaanClipSection />
          </div>
          <div ref='THE STORY' id='THE-STORY' className={styles.sectionContainer}>
            <TheStorySection />
          </div>
          <div ref='WORLD OF KAAN' id='WORLD-OF-KAAN' className={styles.sectionContainer}>
            <WorldOfKaanSection />
          </div>
          <div ref='KAAN GALLERY' id='KAAN-GALLERY' className={styles.sectionContainer}>
            <KaanGallerySection />
          </div>
          <div ref='MAKING THE SHOW' id='MAKING-THE-SHOW' className={styles.sectionContainer}>
            <MakingTheShowSection />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
})

export default MainPage
