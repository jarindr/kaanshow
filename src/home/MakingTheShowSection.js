import ImageModalBox from '../components/ImageModal'
import Modal from 'react-modal'
import PreviewListSection from '../components/PreviewListSection'
import PreviewSection from '../components/PreviewSection'
import React from 'react'
import Title from '../components/Title'
import styles from './MakingTheShowSection.styl'
const DATA = [
  {
    url: 'https://www.youtube.com/watch?v=QC4xnfh_-Eo',
    caption: 'od tempor incididunt ut labore et dolore.',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'video'
  },
  {
    url: 'https://www.youtube.com/watch?v=nI8baFj05uE',
    caption: 'od tempor incididunt ut labore et dolore.',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'video'
  },
  {
    url: 'https://www.youtube.com/watch?v=Ejj2t6tJfEU',
    caption: 'od tempor incididunt ut labore et dolore.',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'video'
  },
  {
    url: require('../assets/images/characters/GinnaRee-small.jpg'),
    caption: 'od tempor incididunt ut labore et dolore.',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'image'
  },
  {
    url: require('../assets/images/characters/chalawan-small.jpg'),
    caption: 'od tempor incididunt ut labore et dolore.',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'image'
  },
  {
    url: 'https://www.youtube.com/watch?v=tgQpUTDBI1A',
    caption: 'od tempor incididunt ut labore et dolore.',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'video'
  },
  {
    url: 'https://www.youtube.com/watch?v=PFRJvHXaNBk',
    caption: 'od tempor incididunt ut labore et dolore.',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'video'
  },
  {
    url: 'https://www.youtube.com/watch?v=cL4uhaQ58Rk',
    caption: 'od tempor incididunt ut labore et dolore.',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'video'
  },
  {
    url: 'https://www.youtube.com/watch?v=xIY_b10iehY',
    caption: 'od tempor incididunt ut labore et dolore.',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'video'
  }
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
const MakingTheShowSection = React.createClass({
  getInitialState () {
    return {
      isModalOpen: false,
      current: 0,
      currentCategory: 'all',
      filteredData: this.getFilterdData('all')
    }
  },
  onClickPreview (i, e) {
    this.setState({ isModalOpen: true, current: i })
  },
  closeModal () {
    this.setState({ isModalOpen: false })
  },
  onChangeCategory (category) {
    this.setState({currentCategory: category, filteredData: this.getFilterdData(category)})
  },
  getFilterdData (category) {
    return category === 'all'
    ? DATA
    : DATA.filter(x => x.type === category)
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
  renderVideoModal () {
    return (
      <Modal
        isOpen={this.state.isModalOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        >
        <PreviewListSection
          data={DATA.filter(x => /youtube/.test(x.url))}
          onClickPreview={this.onClickPreview}
          current={this.state.filteredData[this.state.current]}
          closeModal={this.closeModal}
        />
      </Modal>
    )
  },
  renderImageModal () {
    return (
      <ImageModalBox
        isModalOpen={this.state.isModalOpen}
        closeModal={this.closeModal}
        image={this.state.filteredData[this.state.current].url}
        current={this.state.current}
        onClickNext={this.onClickNext}
        onClickPrev={this.onClickPrev}
      />
    )
  },
  render () {
    return (
      <div className={styles.container}>
        <Title text='MAKING THE SHOW' />
        <p>
          KAAN คือ ประวัติศาสตร์หน้าใหม่ของการแสดงโชว์ในเมืองไทย
          ที่ได้รวบรวมสุดยอดฝีมือด้านต่างๆ ในเมืองไทย<br />เอาไว้มากมายกว่า 600 ชีวิต
          ซึ่งทุกคนต่างทุ่มเทในการเตรียมงานโดยใช้เวลากว่า 3 ปี
          นักแสดงและทีมงานเบื้องหลังผ่านการฝึกซ้อมอย่างหนักกว่า 10 เดือน
          เพื่อให้โชว์ 90 นาทีนี้ เป็นโชว์ที่จะสร้างความประทับใจให้กับผู้ชมตลอดไป
        </p>
        <div className={styles.previewSectionContainer}>
          <PreviewSection
            data={DATA}
            onClickPreview={this.onClickPreview}
            currentCategory={this.state.currentCategory}
            onChangeCategory={this.onChangeCategory}
          />
        </div>
        {/youtube/.test(this.state.filteredData[this.state.current].url) ? this.renderVideoModal() : this.renderImageModal()}
      </div>
    )
  }
})

export default MakingTheShowSection
