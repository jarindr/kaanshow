import React from 'react'

import IntroSection from './IntroSection'
import KaanClipSection from './KaanClipSection'

const MainPage = React.createClass({
  render () {
    return (
      <div>
        <IntroSection />
        <KaanClipSection />
      </div>
    )
  }
})

export default MainPage
