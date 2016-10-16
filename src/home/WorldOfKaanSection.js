import React from 'react'

import styles from './WorldOfKaanSection.styl'
import worldOfKaanData from './WorldOfKaanData'
import Title from '../components/Title'
import WorldOfKaanModal from '../components/WorldOfKaanModal'

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
        <div className={styles.backgroundImageContainer}>
          <div className={styles.blockTitle}>
            {this.props.title}
            <br />
            <span>({this.props.subTitle})</span>
          </div>
          <img src={this.props.backgroundImage} />
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
    console.log(i)
    this.setState({isModalOpen: true, current: i})
  },
  closeModal () {
    this.setState({isModalOpen: false})
  },
  renderBlocks () {
    return worldOfKaanData.map((x, i) => (
      <Block
        title={x.title}
        subTitle={x.subTitle}
        backgroundImage={x.backgroundImage}
        onClickBlock={this.onClickBlock.bind(null, x)}
        key={i}
      />
    ))
  },
  render () {
    return (
      <div className={styles.container}>
        <Title text='WORLD OF KAAN' />
        <h2 className={styles.subTitle}>THE JOURNEY BEGINS</h2>
        <div className={styles.blocksContainer}>
          {this.renderBlocks()}
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
