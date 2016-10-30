import FlipMove from 'react-flip-move'
import React from 'react'
import getYouTubeID from 'get-youtube-id'
import styles from './PreviewSection.styl'

const PreviewSection = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    onClickPreview: React.PropTypes.func,
    onChangeCategory: React.PropTypes.func
  },
  getInitialState () {
    return {
      current: 0,
      currentCategory: 'all'
    }
  },
  onChangeCategory (category, e) {
    this.setState({
      currentCategory: category
    })
  },
  renderCatagory () {
    const catagories = ['all', ...new Set(this.props.data.map(x => x.type || null))]
    const elements = catagories.map(x => (
      <span key={x} className={styles.category} style={{opacity: x === this.state.currentCategory ? 1 : 0.5}} onClick={this.onChangeCategory.bind(null, x)}>
        {x}
      </span>
    ))
    if (catagories.includes(null)) {
      return null
    } else {
      return (
        <div className={styles.categoriesContainer}>
          {elements}
        </div>
      )
    }
  },
  renderPreviewBlock (data, i) {
    const imageUrl = /(youtube)/.test(data.url)
      ? `http://img.youtube.com/vi/${getYouTubeID(data.url)}/maxresdefault.jpg`
      : data.url
    return (
      <div key={imageUrl} className={styles.previewBlock} onClick={this.props.onClickPreview.bind(null, data)}>
        <div className={styles.imageContainer}>
          <img src={require('../assets/images/play.png')} className={styles.playButton} hidden={!(/(youtube)/.test(data.url))} />
          <img src={imageUrl} className={styles.previewImage} />
        </div>
        <div className={styles.caption}>{data.caption}</div>
      </div>
    )
  },
  getFilterdData () {
    return this.props.data
    .filter(x => this.state.currentCategory === 'all' ? true : x.type === this.state.currentCategory)
  },
  renderPreviewBlocks () {
    return this.getFilterdData()
    .map((x, i) => this.renderPreviewBlock(x, i))
    .slice(6 * this.state.current, 6 * this.state.current + 6)
  },
  onClickCircleNavigation (i, e) {
    this.setState({current: i})
  },
  renderNavigation () {
    const numberList = Math.ceil(this.getFilterdData().length / 6)
    const current = this.state.current
    const circleList = Array(numberList).fill().map((x, i) => (
      <div
        className={`${i === current ? styles.navigationActive : styles.navigation}`}
        onClick={this.onClickCircleNavigation.bind(null, i)}
        key={i}
      >
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
        {this.renderCatagory()}
        <div className={styles.previewBlocksContainer}>
          <FlipMove>
            {this.renderPreviewBlocks()}
          </FlipMove>
        </div>
        {this.renderNavigation()}
      </div>
    )
  }
})

export default PreviewSection
