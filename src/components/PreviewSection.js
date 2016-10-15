import getYouTubeID from 'get-youtube-id'
import FlipMove from 'react-flip-move'
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
  renderPreviewBlock (data, i) {
    const imageUrl = `http://img.youtube.com/vi/${getYouTubeID(data.url)}/maxresdefault.jpg`
    return (
      <div key={i} className={styles.previewBlock} onClick={this.props.onClickPreview.bind(null, getYouTubeID(data.url))}>
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
    .map((x, i) => this.renderPreviewBlock(x, i))
    .slice(6 * this.state.current, 6 * this.state.current + 6)
  },
  onClickCircleNavigation (i, e) {
    this.setState({current: i})
  },
  renderNavigation () {
    const numberList = Math.ceil(this.props.data.length / 6)
    const current = this.state.current
    const circleList = Array(numberList).fill().map((x, i) => (
      <div
        className={`${i === current ? styles.navigationActive : styles.navigation}`}
        onClick={this.onClickCircleNavigation.bind(null, i)}>
      </div>
    ))
    return (
      <div className={styles.navigationContainer}>
        {circleList}
      </div>
    )
  },
  render () {
    return (
      <div className={styles.container}>
        <Title text='KAAN CLIPS' />
        <div className={styles.previewBlocksContainer}>
          <FlipMove enterAnimation='fade' leaveAnimation='fade'>
            {this.renderPreviewBlocks()}
          </FlipMove>
        </div>
        {this.renderNavigation()}
      </div>
    )
  }
})

export default PreviewSection
