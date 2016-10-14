import React from 'react'

import IntroSection from './IntroSection'
import KaanClipSection from './KaanClipSection'
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
      </div>
    )
  }
})

export default MainPage
