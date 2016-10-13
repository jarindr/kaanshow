import React from 'react'

import styles from './Title.styl'

const Title = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },
  render () {
    return (
      <h1 className={styles.title}>{this.props.text}</h1>
    )
  }
})

export default Title
