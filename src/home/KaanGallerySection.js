import ImageModalBox from '../components/ImageModal'
import PreviewSection from '../components/PreviewSection'
import React from 'react'
import Title from '../components/Title'
import styles from './KaanGallerySection.styl'
const DATA = [
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_01_ch.png'),
    image: require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_01-Character_ch.png'),
    type: 'show'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_02_ch.png'),
    image: require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_01-Character_ch.png'),
    type: 'show'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_03-Character_ch.png'),
    image: require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_03-Character_ch.png'),
    type: 'show'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_04_ch.png'),
    image: require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_01-Character_ch.png'),
    type: 'show'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_05_ch.png'),
    image: require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_01-Character_ch.png'),
    type: 'show'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_06_ch.png'),
    image: require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_01-Character_ch.png'),
    type: 'show'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_01-Character_ch.png'),
    image: require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_01-Character_ch.png'),
    type: 'character'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_02-Character_ch.png'),
    image: require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_02-Character_ch.png'),
    type: 'character'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_03-Character_ch.png'),
    image: require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_03-Character_ch.png'),
    type: 'character'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_04-Character_ch.png'),
    image: require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_04-Character_ch.png'),
    type: 'character'
  },
  {
    url: require('../home/assets/KAAN Show_01 Intro to KAAN (1280x800 px).png'),
    image: require('../home/assets/KAAN Show_04 World of KAAN P1 (1280x800 px).png'),
    type: 'character'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_05-Character_ch.png'),
    image: require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_05-Character_ch.png'),
    type: 'character'
  },
  {
    url: require('../home/assets/kaanGallery/KAAN-Gallery_Thumbnail-(500x350px)_06-Character_ch.png'),
    image: require('../home/assets/kaanGallery/KAAN-Gallery_Full-Screen-(855x575px)_06-Character_ch.png'),
    type: 'character'
  },
  {
    url: require('../assets/images/characters/GinnaRee-small.jpg'),
    image: require('../assets/images/characters/GinnaRee-small.jpg'),
    type: 'show'
  },
  {
    url: require('./assets/kaanGallery/soon.png'),
    image: require('./assets/kaanGallery/soon.png'),
    type: 'special effect',
    option: 'hide'
  }
]

const KaanClipSection = React.createClass({
  getInitialState () {
    return {
      isModalOpen: false,
      currentCategory: 'all',
      current: 0,
      filteredData: this.getFilterdData('all')
    }
  },
  onClickPreview (i, e) {
    this.setState({ isModalOpen: true, current: i })
  },
  closeModal () {
    this.setState({ isModalOpen: false, current: 0 })
  },
  onChangeCategory (category) {
    this.setState({currentCategory: category, filteredData: this.getFilterdData(category)})
  },
  onClickNext () {
    if (this.state.current + 1 > this.state.filteredData.length - 1) {
      this.setState({current: 0})
    } else {
      this.setState({current: this.state.current + 1})
    }
  },
  onClickPrev () {
    if (this.state.current - 1 < 0) {
      this.setState({current: this.state.filteredData.length - 1})
    } else {
      this.setState({current: this.state.current - 1})
    }
  },
  getFilterdData (category) {
    return category === 'all'
    ? DATA.map(x => x.image)
    : DATA.filter(x => x.type === category).map(x => x.image)
  },
  renderModal () {
    return (
      <ImageModalBox
        isModalOpen={this.state.isModalOpen}
        closeModal={this.closeModal}
        image={this.state.filteredData[this.state.current]}
        current={this.state.current}
        onClickNext={this.onClickNext}
        onClickPrev={this.onClickPrev}
      />
    )
  },
  render () {
    return (
      <div className={styles.container}>
        <Title text='KAAN GALLERY' />
        <PreviewSection
          data={DATA}
          filteredData={this.state.filteredData}
          onClickPreview={this.onClickPreview}
          onChangeCategory={this.onChangeCategory}
          currentCategory={this.state.currentCategory}
          category={['character', 'show', 'special effect']}
        />
        {this.renderModal()}
      </div>
    )
  }
})

export default KaanClipSection
