import './Layout.global.styl'

import Helmet from 'react-helmet'
import React from 'react'

import NavBar from '../components/NavBar'

const Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },
  render () {
    return (
      <div>
        <Helmet
          titleTemplate=''
          defaultTitle=''
          script={[
            {innerHTML: require('raw!../FontLoader.js'), 'type': 'text/javascript'}
          ]}
          link={[
          ]}
          meta={[
          ]}
        />
        <NavBar />
        {this.props.children}
      </div>
    )
  }
})

export default Layout
