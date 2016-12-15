import React from 'react'
import styles from './FaqPage.styl'

const FaqPage = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  render () {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>FAQ</h1>
        {this.props.children}
      </div>
    )
  }
})

export default FaqPage
