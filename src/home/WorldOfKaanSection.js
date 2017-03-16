import FlipMove from 'react-flip-move'
import React from 'react'
import SingleSliderResponsive from '../components/SingleSliderResponsive'
import Title from '../components/Title'
import WorldOfKaanModal from '../components/WorldOfKaanModal'
import styles from './WorldOfKaanSection.styl'
import worldOfKaanData from './WorldOfKaanData'
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
      <div className={`${styles.block} ${styles.blockMobile}`} onClick={this.props.onClickBlock.bind(null, x)}>
        <div className={styles.emptyOverlay}></div>
        <div className={styles.blackOverlay}></div>
        <img src={x.backgroundImage} className={styles.imageBlock} />
        <div className={styles.blockTitle}>
          {x.title}
          <div className={styles.subTitle}>
            {x.subTitle}
          </div>
        </div>
      </div>
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
            {this.renderBlocks().slice(this.state.currentSet * 3, 3 + this.state.currentSet * 3)}
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
