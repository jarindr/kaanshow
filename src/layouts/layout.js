import './Layout.global.styl'

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
          script={[{
          }]}
          link={[
            {
              href: '',
              rel: 'stylesheet'
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
