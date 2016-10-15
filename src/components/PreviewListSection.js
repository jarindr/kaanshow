import getYouTubeID from 'get-youtube-id'
import React from 'react'

import styles from './PreviewListSection.styl'

const PreviewListSection = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    onClickPreview: React.PropTypes.func.isRequired,
    current: React.PropTypes.string
  },
  getInitialState () {
    return {
      shouldPlay: false
    }
  },
  renderPreviewBlocks () {
    return this.props.data.map(x => {
      const imageUrl = `http://img.youtube.com/vi/${getYouTubeID(x.url)}/maxresdefault.jpg`
      return (
        <div key={imageUrl} className={styles.previewBlock} onClick={this.props.onClickPreview.bind(null, getYouTubeID(x.url))}>
          <img src={imageUrl} className={styles.previewImage} />
          <div>{x.caption}</div>
        </div>
      )
    })
  },
  onClickPreviewBlock (e) {
    this.setState({shouldPlay: false})
    this.props.onClickPreview()
  },
  onClickPlay () {
    this.setState({shouldPlay: true})
  },
  renderVideo () {
    const imageUrl = `http://img.youtube.com/vi/${this.props.current}/maxresdefault.jpg`
    const videoUrl = `http://www.youtube.com/embed/${this.props.current}?autoplay=1`
    return (
      !this.state.shouldPlay
      ? <img src={imageUrl} onClick={this.onClickPlay} />
    : <iframe width="100%" height='600' src={videoUrl} frameBorder="0"></iframe>
    )
  },
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.mainVideo}>
          {this.renderVideo()}
        </div>
        <div className={styles.listVideos}>
          {this.renderPreviewBlocks()}
        </div>
      </div>

    )
  }
})

export default PreviewListSection
