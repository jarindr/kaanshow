import React from 'react'

import IntroSection from './IntroSection'
import KaanClipSection from './KaanClipSection'
import KaanGallerySection from './KaanGallerySection'
import TheStorySection from './TheStorySection'
import WorldOfKaanSection from './WorldOfKaanSection'

const MainPage = React.createClass({
  render () {
    return (
      <div>
        <IntroSection />
        <KaanClipSection />
        <TheStorySection />
        <WorldOfKaanSection />
        <KaanGallerySection />
      </div>
    )
  }
})

export default MainPage
