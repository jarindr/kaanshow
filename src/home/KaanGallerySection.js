import ImageModalBox from '../components/ImageModal'
import PreviewSection from '../components/PreviewSection'
import React from 'react'
import Title from '../components/Title'
import styles from './KaanGallerySection.styl'
const DATA = [
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_01_ch.png'),
    images: [
      require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_01-Character_ch.png'),
      require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_03-Character_ch.png')
    ],
    type: 'show'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_02_ch.png'),
    images: [
      require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_01-Character_ch.png')
    ],
    type: 'show'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_03-Character_ch.png'),
    images: [
      require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_01-Character_ch.png')
    ],
    type: 'show'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_04_ch.png'),
    images: [
      require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_01-Character_ch.png')
    ],
    type: 'show'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_05_ch.png'),
    images: [
      require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_01-Character_ch.png')
    ],
    type: 'show'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_06_ch.png'),
    images: [
      require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_01-Character_ch.png')
    ],
    type: 'show'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_01-Character_ch.png'),
    images: [
      require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_01-Character_ch.png')
    ],
    type: 'character'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_02-Character_ch.png'),
    images: [
      require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_02-Character_ch.png')
    ],
    type: 'character'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_03-Character_ch.png'),
    images: [
      require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_03-Character_ch.png')
    ],
    type: 'character'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_04-Character_ch.png'),
    images: [
      require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_04-Character_ch.png')
    ],
    type: 'character'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_05-Character_ch.png'),
    images: [
      require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_05-Character_ch.png')
    ],
    type: 'character'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_06-Character_ch.png'),
    images: [
      require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_06-Character_ch.png')
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
  }
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
