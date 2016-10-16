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
    this.setState({shouldPlay: false}, () => {
      this.props.onClickPreview(data)
    })
  },
  onClickPlay () {
    this.setState({shouldPlay: true})
  },
  renderVideo () {
    const imageUrl = /(youtube)/.test(this.props.current.url)
      ? `http://img.youtube.com/vi/${getYouTubeID(this.props.current.url)}/maxresdefault.jpg`
      : this.props.current.url
    const videoUrl = `http://www.youtube.com/embed/${getYouTubeID(this.props.current.url)}?autoplay=1`
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
