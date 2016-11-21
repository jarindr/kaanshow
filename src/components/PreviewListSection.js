import React from 'react'
import getYouTubeID from 'get-youtube-id'
import styles from './PreviewListSection.styl'

const PreviewListSection = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    onClickPreview: React.PropTypes.func.isRequired,
    current: React.PropTypes.string,
    closeModal: React.PropTypes.func.isRequired
  },
  componentDidMount () {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    this.setState({shouldPlay: width < 768})
  },
  getInitialState () {
    return {
      shouldPlay: false
    }
  },
  renderPreviewBlocks () {
    return this.props.data.map(x => {
      const imageUrl = /(youtube)/.test(x.url)
        ? `http://img.youtube.com/vi/${getYouTubeID(x.url)}/maxresdefault.jpg`
        : x.url
      return (
        <div key={imageUrl} className={styles.previewBlock} onClick={this.onClickPreviewBlock.bind(null, x)}>
          <img src={imageUrl} className={styles.previewImage} />
          <div className={styles.caption}>
            {x.caption}
            <div style={{opacity: 0.5}}>{x.subCaption.substr(1, 20) || ''}</div>
          </div>
        </div>
      )
    })
  },
  onClickPreviewBlock (data, e) {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    width > 768
      ? this.setState({shouldPlay: false}, () => this.props.onClickPreview(data))
      : this.props.onClickPreview(data)
  },
  onClickPlay () {
    this.setState({shouldPlay: true})
  },
  renderMainImagePreview () {
    const imageUrl = /(youtube)/.test(this.props.current.url)
      ? `https://img.youtube.com/vi/${getYouTubeID(this.props.current.url)}/maxresdefault.jpg`
      : this.props.current.url
    return (
      <div className={styles.mainImagePreviewContainer}>
        <img src={require('../assets/images/closeButton.png')} className={styles.closeModal} onClick={this.props.closeModal} />
          <div className={styles.captionContainer}>
            <div className={styles.caption}>Making the show od tempor incididunt ut labore et dolore</div>
            <img src={require('../assets/images/play_new.png')} className={styles.playButton} onClick={this.onClickPlay} />
          </div>
        <img src={require('../assets/images/twitter.png')} className={styles.twitter} onClick={this.onClickPlay} />
        <img src={require('../assets/images/fb.png')} className={styles.fb} onClick={this.onClickPlay} />
        <div className={styles.imageOverlay}></div>
        <img src={imageUrl} className={styles.imagePreview} />
      </div>
    )
  },
  renderVideoPreview () {
    return (
      <div className={styles.iframeContainer}>
        <iframe
          width="100%"
          height='100%'
          src={`https://www.youtube.com/embed/${getYouTubeID(this.props.current.url)}?rel=0&amp;autoplay=1`}
          frameBorder="0"
          allowFullScreen>
        </iframe>
      </div>
    )
  },
  renderMainPreview () {
    return (
      !this.state.shouldPlay
      ? this.renderMainImagePreview()
      : this.renderVideoPreview()
    )
  },
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <div className={styles.mainVideo}>
            {this.renderMainPreview()}
          </div>
          <div className={styles.listVideos}>
            {this.renderPreviewBlocks()}
          </div>
        </div>
      </div>

    )
  }
})

export default PreviewListSection
