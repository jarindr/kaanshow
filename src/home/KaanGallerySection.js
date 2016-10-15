import Modal from 'react-modal'
import React from 'react'

import styles from './KaanClipSection.styl'
import PreviewListSection from '../components/PreviewListSection'
import PreviewSection from '../components/PreviewSection'
import Title from '../components/Title'

const DATA = [
  {url: require('../assets/images/characters/chalawan-small.jpg'), type: 'characters'},
  {url: require('../assets/images/characters/crocodilewife-small.jpg'), type: 'show'},
  {url: require('../assets/images/characters/GinnaRee-small.jpg'), type: 'special'}
]

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  content: {
    top: '80px',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    margin: 0,
    border: '0'
  }
}
const KaanClipSection = React.createClass({
  getInitialState () {
    return {
      isModalOpen: false,
      currentCategory: 'all'
    }
  },
  onClickPreview (id, e) {
    this.setState({ isModalOpen: true, current: id })
  },
  closeModal () {
    this.setState({ isModalOpen: false })
  },
  onChangeCategory (catagory) {
    this.setState({currentCategory: catagory})
  },
  renderModal (data) {
    return (
      <Modal
        isOpen={this.state.isModalOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
      >
        <PreviewListSection data={DATA.filter(x => /http/.test(x))} current={this.state.current} />
      </Modal>
    )
  },
  render () {
    return (
      <div className={styles.container}>
        <Title text='KAAN GALLERY' />
        <PreviewSection
          data={DATA}
          onClickPreview={this.onClickPreview}
          onChangeCategory={this.onChangeCategory}
        />
        {this.renderModal()}
      </div>
    )
  }
})

export default KaanClipSection
