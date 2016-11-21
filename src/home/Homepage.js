import Footer from '../components/Footer'
import IntroSection from './IntroSection'
import KaanClipSection from './KaanClipSection'
import KaanGallerySection from './KaanGallerySection'
import { Link } from 'react-router'
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
  checkNavScroll () {
    const scrollPosition = $(window).scrollTop()
    $(`.${styles.circle}`).each((index, el) => {
      const id = $(el).attr('data-attribute')
      const $section = $(this.refs[id])
      const top = $section.offset().top - 81 - 50
      const bottom = top + $section.outerHeight(true)
      if (bottom > scrollPosition && top < scrollPosition) {
        $(el).addClass(styles.white)
        $(el).siblings(`.${styles.dotNavText}`).addClass(styles.show)
      } else {
        $(el).removeClass(styles.white)
        $(el).siblings(`.${styles.dotNavText}`).removeClass(styles.show)
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
  onClickCircle (e) {
    const id = $(e.currentTarget).attr('data-attribute').replace(/ /g, '-')
    scrollTo(`#${id}`, {
      offset: -80,
      ease: 'inOutExpo',
      duration: 1500
    })
  },
  renderCircle (text, i) {
    const textMarkup = () => ({__html: text})
    return (
      <div className={styles.dotNavContainer} key={i}>
        <div className={styles.dotNavText} dangerouslySetInnerHTML={textMarkup()} />
        <div className={styles.circle} data-attribute={text.replace('<br>', ' ')} onClick={this.onClickCircle}></div>
      </div>
    )
  },
  render () {
    return (
      <div>
        <div className={styles.container}>
          {this.renderSideNav()}
          <div ref='INTRO TO KAAN' id='INTRO-TO-KAAN'>
            <IntroSection />
          </div>
          <div ref='KAAN CLIPS' id='KAAN-CLIPS'>
            <KaanClipSection />
          </div>
          <div ref='THE STORY' id='THE-STORY'>
            <TheStorySection />
          </div>
          <div ref='WORLD OF KAAN' id='WORLD-OF-KAAN'>
            <WorldOfKaanSection />
          </div>
          <div ref='KAAN GALLERY' id='KAAN-GALLERY'>
            <KaanGallerySection />
          </div>
          <div ref='MAKING THE SHOW' id='MAKING-THE-SHOW'>
            <MakingTheShowSection />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
})

export default MainPage
