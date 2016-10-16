import Modal from 'react-modal'
import React from 'react'

import styles from './KaanClipSection.styl'
import ImageModalBox from '../components/ImageModal'
import PreviewSection from '../components/PreviewSection'
import Title from '../components/Title'

const DATA = [
  {url: require('../assets/images/characters/chalawan-small.jpg'), type: 'characters'},
  {url: require('../assets/images/characters/crocodilewife-small.jpg'), type: 'show'},
  {url: require('../assets/images/characters/GinnaRee-small.jpg'), type: 'special'}
]
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
  renderModal () {
    return (
      <ImageModalBox
        isModalOpen={this.state.isModalOpen}
        closeModal={this.closeModal}
        images={[require('../assets/images/characters/chalawan-small.jpg')]}
      />
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
