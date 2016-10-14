import getYouTubeID from 'get-youtube-id'
import React from 'react'

import styles from './PreviewSection.styl'
import Title from '../components/Title'

const PreviewSection = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    onClickPreview: React.PropTypes.func
  },
  getInitialState () {
    return {
      current: 0
    }
  },
  renderPreviewBlock (data) {
    const imageUrl = `http://img.youtube.com/vi/${getYouTubeID(data.url)}/maxresdefault.jpg`
    return (
      <div className={styles.previewBlock} onClick={this.props.onClickPreview.bind(null, getYouTubeID(data.url))}>
        <div className={styles.imageContainer}>
          <img src={require('../assets/images/play.png')} className={styles.playButton} />
          <img src={imageUrl} className={styles.previewImage} />
        </div>
        <div>{data.caption}</div>
      </div>
    )
  },
  renderPreviewBlocks () {
    return this.props.data
    .slice(this.state.current, this.state.current + 6)
    .map(x => this.renderPreviewBlock(x))
  },
  render () {
    return (
      <div className={styles.container}>
        <Title text='KAAN CLIPS' />
        <div className={styles.previewBlocksContainer}>
        {this.renderPreviewBlocks()}
        </div>
      </div>
    )
  }
})

export default PreviewSection
