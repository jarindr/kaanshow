import React from 'react'
import { checkIfInView } from '../utils/intersection'
import getYouTubeID from 'get-youtube-id'
import styles from './SinglePreview.styl'
const SinglePreview = React.createClass({
  getInitialState () {
    return {
      isPlayed: false
    }
  },
  componentDidMount () {
    window.addEventListener('scroll', () => {
      const rectIframe = this.refs.container.getBoundingClientRect()
      if (!checkIfInView(rectIframe)) {
        this.setState({isPlayed: false})
      }
    })
  },
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.isPlayed !== this.state.isPlayed
  },
  onClickShare (url, type) {
    const $window = $(window)
    const height = $window.height()
    const width = $window.width()
    const top = (height / 2) - 125
    const left = (width / 2) - 300
    const urlSharer = type === 'facebook' ? `https://www.facebook.com/sharer/sharer.php?u=${url}` : `https://twitter.com/intent/tweet?url=${url}`
    window.open(urlSharer, 'targetWindow', `toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250,top=${top},left=${left}`)
  },
  renderVideo () {
    const url = 'https://www.youtube.com/watch?v=nI8baFj05uE'
    const videoUrl = `https://www.youtube.com/embed/${getYouTubeID(url)}?theme=dark&color=white&autoplay=1&keyboard=1&autohide=2&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3"frameborder="1"`
    return (
      <div className={styles.iframeContainer} id='iframeVideo'>
        <img src={require('../assets/images/twitter.png')} className={styles.twitter} onClick={this.onClickShare.bind(null, url, 'twitter')} />
        <img src={require('../assets/images/fb.png')} className={styles.fb} onClick={this.onClickShare.bind(null, url, 'facebook')} />
        <iframe width="100%" height='100%' src={videoUrl} frameBorder="0" allowFullScreen></iframe>
      </div>
    )
  },
  onPlayClick () {
    this.setState({isPlayed: true})
  },
  renderPreview () {
    const url = 'https://www.youtube.com/watch?v=nI8baFj05uE'
    return (
      <div
        className={styles.singleVideoContainer}
        style={{
          background: `url(https://img.youtube.com/vi/${getYouTubeID('https://www.youtube.com/watch?v=nI8baFj05uE')}/maxresdefault.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        >
        <img src={require('../assets/images/twitter.png')} className={styles.twitter} onClick={this.onClickShare.bind(null, url, 'twitter')} />
        <img src={require('../assets/images/fb.png')} className={styles.fb} onClick={this.onClickShare.bind(null, url, 'facebook')} />
        <div className={styles.captionContainer}>
          <div className={styles.caption}>KAAN A SPECTACULAR CINEMATIC LIVE EXPERIENCE</div>
          <img src={require('../assets/images/play_new.png')} className={styles.playButton} onClick={this.onPlayClick} />
        </div>
        <div className={styles.overlay} />
      </div>
    )
  },
  render () {
    return (
      <div ref='container'>
      {this.state.isPlayed ? this.renderVideo() : this.renderPreview()}
      </div>
    )
  }
})

export default SinglePreview
