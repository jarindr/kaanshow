import React from 'react'

import styles from './HomePage.styl'
import IntroSection from './IntroSection'
import KaanClipSection from './KaanClipSection'
import KaanGallerySection from './KaanGallerySection'
import MakingTheShowSection from './MakingTheShowSection'
import TheStorySection from './TheStorySection'
import WorldOfKaanSection from './WorldOfKaanSection'

const SIDENAV = ['INTRO<br>TO KAAN', 'KAAN CLIPS', 'THE STORY', 'WORLD<br>OF KAAN', 'KAAN<br>GALLERY', 'MAKING<br>THE SHOW']
const MainPage = React.createClass({
  componentDidMount () {
    window.addEventListener('scroll', () => {
      this.checkNavScroll()
    })
    this.checkNavScroll()
  },
  checkNavScroll () {
    const scrollPosition = $(window).scrollTop()
    $(`.${styles.circle}`).each((index, el) => {
      const id = $(el).attr('data-attribute')
      const $section = $(this.refs[id])
      const top = $section.offset().top - 81 - 50
      const bottom = top + $section.outerHeight(true)
      if(bottom > scrollPosition && top < scrollPosition) {
        $(el).addClass(styles.white)
        $(el).siblings(`.${styles.dotNavText}`).addClass(styles.show)
      } else {
        $(el).removeClass(styles.white)
        $(el).siblings(`.${styles.dotNavText}`).removeClass(styles.show)
      }
    })
  },
  renderSideNav () {
    return (
      <div className={styles.sideNavgationContainer}>
        {SIDENAV.map((x, i) => this.renderCircle(x))}
      </div>
    )
  },
  renderCircle (text) {
    const textMarkup = () => ({__html: text})
    return (
      <div className={styles.dotNavContainer}>
        <div className={styles.dotNavText} dangerouslySetInnerHTML={textMarkup()} />
        <div className={styles.circle} data-attribute={text.replace('<br>', ' ')}></div>
      </div>
    )
  },
  render () {
    return (
      <div className={styles.container}>
        {this.renderSideNav()}
        <div ref='INTRO TO KAAN'>
          <IntroSection />
        </div>
        <div ref='KAAN CLIPS'>
          <KaanClipSection />
        </div>
        <div ref='THE STORY'>
          <TheStorySection />
        </div>
        <div ref='WORLD OF KAAN'>
          <WorldOfKaanSection />
        </div>
        <div ref='KAAN GALLERY'>
          <KaanGallerySection />
        </div>
        <div ref='MAKING THE SHOW'>
          <MakingTheShowSection />
        </div>
      </div>
    )
  }
})

export default MainPage
