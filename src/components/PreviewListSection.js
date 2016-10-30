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
          <div className={styles.caption}>{x.caption}</div>
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
      <div className={styles.mainImagePreviewContainer} onClick={this.onClickPlay}>
        <div className={styles.closeModal} onClick={this.props.closeModal}>X</div>
        <div className={styles.playButton}>
          <img src={require('../assets/images/play.png')} className={styles.playButton} />
        </div>
        <div className={styles.imageOverlay}></div>
        <img src={imageUrl} />
      </div>
    )
  },
  renderVideoPreview () {
    const videoUrl = `https://www.youtube.com/embed/${getYouTubeID(this.props.current.url)}?rel=0&amp;autoplay=1`
    return (
      <div className={styles.iframeContainer}>
        <iframe width="100%" height='100%' src={videoUrl} frameBorder="0" allowFullScreen></iframe>
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
