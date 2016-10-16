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
          script={[]}
          link={[
            {
              href: 'https://fonts.googleapis.com/css?family=Chonburi|Kanit:300|Montserrat',
              rel: 'stylesheet',
              type: 'text/css'
            }
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
