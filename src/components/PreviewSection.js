import FlipMove from 'react-flip-move'
import React from 'react'
import ResponsiveSlider from '../components/SingleSliderResponsive'
import getYouTubeID from 'get-youtube-id'
import styles from './PreviewSection.styl'
const PreviewSection = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    onClickPreview: React.PropTypes.func,
    onChangeCategory: React.PropTypes.func,
    currentCategory: React.PropTypes.string,
    category: React.PropTypes.array
  },
  componentDidMount () {
    const $container = $(this.refs.container)[0]
    let containerHeight = $container.offsetHeight / Math.ceil(this.props.data.length / 3) * 2
    this.setState({containerHeight, blockWidth: ($(this.refs.container).outerWidth() - 13) / 3})
    $(window).on('resize', (e) => {
      this.setState({containerHeight, blockWidth: ($(this.refs.container).outerWidth() - 13) / 3})
    })
  },
  getInitialState () {
    return {
      containerHeight: 'auto'
    }
  },
  renderCatagory () {
    const catagories = this.props.category ? ['all', ...this.props.category] : ['all', ...new Set(this.props.data.map(x => x.type || null))]
    const elements = catagories.map(x => (
      <span key={x} className={styles.category} style={{ opacity: x === this.props.currentCategory ? 1 : 0.5 }} onClick={this.props.onChangeCategory.bind(null, x)}>
        {x}
      </span>
    ))
    if (catagories.indexOf(null) !== -1) {
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
      ? `https://img.youtube.com/vi/${getYouTubeID(data.url)}/maxresdefault.jpg`
      : data.url
    return (
      <div
        className={styles.previewBlock}
        onClick={this.props.onClickPreview.bind(null, i)}
        style={{maxWidth: this.state.blockWidth ? this.state.blockWidth : '33.33%'}}
        key={Math.random().toString(36).substring(2, 15)}
      >
        <div className={styles.imageContainer} style={{ background: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <img
            src={require('../assets/images/play_new.png')}
            className={styles.playButton}
            style={{opacity: (/(youtube)/.test(data.url)) ? 1 : 0}}
          />
        </div>
        <div className={styles.caption} hidden={!data.caption}>
          {data.caption}
          <div style={{ opacity: 0.5, marginTop: '4px' }}>{data.subCaption || ''}</div>
        </div>
      </div>
    )
  },
  getFilterdData () {
    return this.props.data
      .filter(x => this.props.currentCategory === 'all' ? x.option !== 'hide' : x.type === this.props.currentCategory)
  },
  renderPreviewBlocks () {
    return this.getFilterdData()
      .map((x, i) => this.renderPreviewBlock(x, i))
  },
  onClickCircleNavigation (i, e) {
    this.setState({ current: i })
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
        <div className={styles.responsiveSliderContainer}>
          <ResponsiveSlider data={this.renderPreviewBlocks()} />
        </div>
        <div
          className={`${styles.previewBlocksContainer} customScrollBar`}
          ref='container'
          style={{ height: this.state.containerHeight }}
        >
          <FlipMove enterAnimation='fade' leaveAnimation='fade'>
            {this.renderPreviewBlocks()}
          </FlipMove>
        </div>
      </div>
    )
  }
})

export default PreviewSection
