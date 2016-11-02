import ImageModalBox from '../components/ImageModal'
import Modal from 'react-modal'
import PreviewListSection from '../components/PreviewListSection'
import PreviewSection from '../components/PreviewSection'
import React from 'react'
import Title from '../components/Title'
import styles from './MakingTheShowSection.styl'
const DATA = [
  {url: 'https://www.youtube.com/watch?v=QC4xnfh_-Eo', caption: 'hello', type: 'video'},
  {url: 'https://www.youtube.com/watch?v=Ejj2t6tJfEU', caption: 'hello', type: 'video'},
  {url: require('../assets/images/characters/GinnaRee-small.jpg'), caption: 'wow', type: 'image'},
  {url: 'https://www.youtube.com/watch?v=tgQpUTDBI1A', caption: 'hello', type: 'video'},
  {url: 'https://www.youtube.com/watch?v=PFRJvHXaNBk', caption: 'hello', type: 'video'},
  {url: require('../assets/images/characters/chalawan-small.jpg'), caption: 'wow', type: 'image'},
  {url: 'https://www.youtube.com/watch?v=cL4uhaQ58Rk', caption: 'hello', type: 'video'},
  {url: 'https://www.youtube.com/watch?v=X2kGaP7N2VA', caption: 'hello', type: 'video'},
  {url: 'https://www.youtube.com/watch?v=xIY_b10iehY', caption: 'hello', type: 'video'}
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
      current: ''
    }
  },
  onClickPreview (data, e) {
    this.setState({ isModalOpen: true, current: data })
  },
  closeModal () {
    this.setState({ isModalOpen: false })
  },
  renderVideoModal () {
    return (
      <Modal
        isOpen={this.state.isModalOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        >
        <PreviewListSection data={DATA.filter(x => /youtube/.test(x.url))} onClickPreview={this.onClickPreview} current={this.state.current} />
      </Modal>
    )
  },
  renderImageModal (data) {
    return (
      <ImageModalBox
        isModalOpen={this.state.isModalOpen}
        closeModal={this.closeModal}
        images={[this.state.current.url]}
      />
    )
  },
  render () {
    return (
      <div className={styles.container}>
        <Title text='MAKING THE SHOW' />
        <p>
          KAAN คือ ประวัติศาสตร์หน้าใหม่ของการแสดงโชว์ในเมืองไทย
          ที่ได้รวบรวมสุดยอดฝีมือด้านต่างๆ ในเมืองไทยเอาไว้มากมายกว่า 600 ชีวิต
          ซึ่งทุกคนต่างทุ่มเทในการเตรียมงานโดยใช้เวลากว่า 3 ปี
          นักแสดงและทีมงานเบื้องหลังผ่านการฝึกซ้อมอย่างหนักกว่า 10 เดือน
          เพื่อให้โชว์ 90 นาทีนี้ เป็นโชว์ที่จะสร้างความประทับใจให้กับผู้ชมตลอดไป
        </p>
        <div className={styles.previewSectionContainer}>
          <PreviewSection data={DATA} onClickPreview={this.onClickPreview} />
        </div>
        {/youtube/.test(this.state.current.url) ? this.renderVideoModal() : this.renderImageModal()}
      </div>
    )
  }
})

export default MakingTheShowSection
