import FlipMove from 'react-flip-move'
import React from 'react'
import SingleSliderResponsive from '../components/SingleSliderResponsive'
import Title from '../components/Title'
import WorldOfKaanModal from '../components/WorldOfKaanModal'
import styles from './WorldOfKaanSection.styl'
import worldOfKaanData from './WorldOfKaanData'
const Block = React.createClass({
  propTypes: {
    backgroundImage: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    subTitle: React.PropTypes.string,
    onClickBlock: React.PropTypes.func
  },
  render () {
    return (
      <div className={styles.block} onClick={this.props.onClickBlock}>
        <div className={styles.emptyOverlay}></div>
        <div className={styles.blackOverlay}></div>
        <img src={this.props.backgroundImage} className={styles.imageBlock} />
        <div className={styles.blockTitle}>
          {this.props.title}
          <div className={styles.subTitle}>
            {this.props.subTitle}
          </div>
        </div>
      </div>
    )
  }
})

const SlideShow = React.createClass({
  propTypes: {
    current: React.PropTypes.number,
    onClickBlock: React.PropTypes.func
  },
  getInitialState () {
    return {
      currentSet: 0
    }
  },
  renderBlocks () {
    return worldOfKaanData
    .map((x, i) => (
      <Block
        title={x.title}
        subTitle={x.subTitle}
        backgroundImage={x.backgroundImage}
        onClickBlock={this.props.onClickBlock.bind(null, x)}
        key={i}
        />
    ))
  },
  onClickArrowLeft () {
    this.setState({ currentSet: 0 })
  },
  onClickArrowRight () {
    this.setState({ currentSet: 1 })
  },
  render () {
    return (
      <div className={styles.sliderContainer}>
        <div className={styles.responsiveSliderContainer}>
          <SingleSliderResponsive data={this.renderBlocks()} />
        </div>
        <div className={styles.desktopSliderContainer}>
          <img src={require('../assets/images/arrow.png')} className={styles.arrowLeft} onClick={this.onClickArrowLeft} />
          <img src={require('../assets/images/arrow.png')} className={styles.arrowRight} onClick={this.onClickArrowRight} />
          <FlipMove enterAnimation='fade' leaveAnimation='fade'>
            {this.renderBlocks().slice(this.state.currentSet * 3, 3 + this.state.currentSet * 3)}
          </FlipMove>
        </div>
      </div>

    )
  }
})

const WorldOfKaanSection = React.createClass({
  getInitialState () {
    return {
      isModalOpen: false,
      current: 0
    }
  },
  onClickBlock (i, e) {
    this.setState({isModalOpen: true, current: i})
  },
  closeModal () {
    this.setState({isModalOpen: false})
  },
  render () {
    return (
      <div className={styles.container}>
        <Title text='WORLD OF KAAN' />
        <h2 className={styles.subTitle}>THE JOURNEY BEGINS</h2>
        <div className={styles.blocksContainer}>
          <SlideShow current={this.state.current} onClickBlock={this.onClickBlock} />
        </div>
        <WorldOfKaanModal
          title={this.state.current.title || null}
          subTitle={this.state.current.subTitle || null}
          images={this.state.current.images || []}
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          >
          {this.state.current.content}
        </WorldOfKaanModal>
      </div>
    )
  }
})

export default WorldOfKaanSection
