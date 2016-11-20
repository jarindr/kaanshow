import './Layout.global.styl'

import Footer from '../components/Footer'
import Helmet from 'react-helmet'
import NavBar from '../components/NavBar'
import React from 'react'

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
              href: 'https://fonts.googleapis.com/css?family=Chonburi|Kanit:200,700|Montserrat',
              rel: 'stylesheet',
              type: 'text/css'
            }
          ]}
          meta={[
          ]}
        />
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})

export default Layout
