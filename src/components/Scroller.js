import React from 'react'
import getYouTubeID from 'get-youtube-id'
import styles from './Scroller.styl'
const ScrollerBox = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },
  renderBox (data) {
    const imageUrl = /(youtube)/.test(data.url)
      ? `http://img.youtube.com/vi/${getYouTubeID(data.url)}/maxresdefault.jpg`
      : data.url
    return (
      <div className={styles.boxContainer}>
        <img src={imageUrl} />
      </div>
    )
  },
  render () {
    return (
      <div className={styles.container}>
        {this.props.data.map(x => this.renderBox(x))}
      </div>
    )
  }
})

export default ScrollerBox
