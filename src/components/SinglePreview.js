import React from 'react'
import getYouTubeID from 'get-youtube-id'
import styles from './SinglePreview.styl'
const SinglePreview = React.createClass({
  getInitialState () {
    return {
      isPlayed: false
    }
  },
  renderVideo () {
    const videoUrl = `https://www.youtube.com/embed/${getYouTubeID('https://www.youtube.com/watch?v=nI8baFj05uE')}?rel=0&amp;autoplay=1`
    return (
      <div className={styles.iframeContainer}>
        <iframe width="100%" height='100%' src={videoUrl} frameBorder="0" allowFullScreen></iframe>
      </div>
    )
  },
  onPlayClick () {
    this.setState({isPlayed: true})
  },
  renderPreview () {
    return (
      <div
        className={styles.singleVideoContainer}
        onClick={this.onPlayClick}
        style={{
          background: `url(https://img.youtube.com/vi/${getYouTubeID('https://www.youtube.com/watch?v=nI8baFj05uE')}/maxresdefault.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        >
        <div className={styles.captionContainer}>
          <div className={styles.caption}>KAAN A SPECTACULAR CINEMATIC LIVE EXPERIENCE</div>
          <img src={require('../assets/images/play_new.png')} className={styles.playButton} />
        </div>
        <div className={styles.overlay} />
      </div>
    )
  },
  render () {
    return this.state.isPlayed ? this.renderVideo() : this.renderPreview()
  }
})

export default SinglePreview
