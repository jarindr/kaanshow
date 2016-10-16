import Modal from 'react-modal'
import React from 'react'

import styles from './KaanClipSection.styl'
import ImageModalBox from '../components/ImageModal'
import PreviewSection from '../components/PreviewSection'
import Title from '../components/Title'

const DATA = [
  {
    url: require('../assets/images/characters/chalawan-small.jpg'),
    images: [
      require('../assets/images/characters/chalawan-small.jpg'),
      require('../assets/images/characters/GinnaRee-small.jpg'),
      require('../assets/images/characters/GinnaRee.jpg'),
      require('../assets/images/characters/Mermaid.jpg')
    ],
    type: 'character'
  },
  {
    url: require('../assets/images/characters/GinnaRee-small.jpg'),
    images: [
      require('../assets/images/characters/chalawan-small.jpg'),
      require('../assets/images/characters/GinnaRee-small.jpg')
    ],
    type: 'show'
  },
  {
    url: require('../assets/images/characters/crocodilewife-small.jpg'),
    images: [
      require('../assets/images/characters/chalawan-small.jpg'),
      require('../assets/images/characters/GinnaRee-small.jpg')
    ],
    type: 'special effect'
  },
]
const KaanClipSection = React.createClass({
  getInitialState () {
    return {
      isModalOpen: false,
      currentCategory: 'all',
      current: {
        images: []
      }
    }
  },
  onClickPreview (data, e) {
    this.setState({ isModalOpen: true, current: data })
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
        images={this.state.current.images}
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
