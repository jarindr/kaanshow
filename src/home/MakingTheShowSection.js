import ImageModalBox from '../components/ImageModal'
import Modal from 'react-modal'
import PreviewListSection from '../components/PreviewListSection'
import PreviewSection from '../components/PreviewSection'
import React from 'react'
import Title from '../components/Title'
import styles from './MakingTheShowSection.styl'
const VIDEODATA = [
  {
    url: 'https://www.youtube.com/watch?v=XnYOqcE2apE&t=22s',
    caption: 'KAAN : THE PRODUCTION PROGRESS',
    subCaption: 'อัพเดทความคืบหน้า KAAN กับประมวลภาพเบื้องหลังสุดเอ็กซ์คลูซีฟ',
    type: 'video'
  }
]
const IMAGEDATA = [
  {
    url: require('./assets/makingTheShow/KAAN_Website_MakingTheShow01.jpg'),
    caption: 'เบื้องหลังความอลังการของ KAAN presented by SINGHA CORPORATION',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'image'
  },
  {
    url: require('./assets/makingTheShow/KAAN_Website_MakingTheShow02.jpg'),
    caption: 'เบื้องหลังความอลังการของ KAAN presented by SINGHA CORPORATION',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'image'
  },
  {
    url: require('./assets/makingTheShow/KAAN_Website_MakingTheShow03.jpg'),
    caption: 'เบื้องหลังความอลังการของ KAAN presented by SINGHA CORPORATION',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'image'
  },
  {
    url: require('./assets/makingTheShow/KAAN_Website_MakingTheShow04.jpg'),
    caption: 'เบื้องหลังความอลังการของ KAAN presented by SINGHA CORPORATION',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'image'
  },
  {
    url: require('./assets/makingTheShow/KAAN_Website_MakingTheShow05.jpg'),
    caption: 'เบื้องหลังความอลังการของ KAAN presented by SINGHA CORPORATION',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'image'
  },
  {
    url: require('./assets/makingTheShow/KAAN_Website_MakingTheShow06.jpg'),
    caption: 'เบื้องหลังความอลังการของ KAAN presented by SINGHA CORPORATION',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'image'
  },
  {
    url: require('./assets/makingTheShow/KAAN_Website_MakingTheShow07.jpg'),
    caption: 'เบื้องหลังความอลังการของ KAAN presented by SINGHA CORPORATION',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'image'
  },
  {
    url: require('./assets/makingTheShow/KAAN_Website_MakingTheShow08.jpg'),
    caption: 'เบื้องหลังความอลังการของ KAAN presented by SINGHA CORPORATION',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'image'
  },
  {
    url: require('./assets/makingTheShow/KAAN_Website_MakingTheShow09.jpg'),
    caption: 'เบื้องหลังความอลังการของ KAAN presented by SINGHA CORPORATION',
    subCaption: 'x ea commodo consequat ex commodo consequat',
    type: 'image'
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
      currentAll: 0,
      currentCategory: 'all',
      filteredData: this.getFilterdData('all')
    }
  },
  onClickPreview (i, e) {
    const index = this.state.filteredData[i].type === 'video'
    ? VIDEODATA.map(x => x.url).indexOf(this.state.filteredData[i].url)
    : IMAGEDATA.map(x => x.url).indexOf(this.state.filteredData[i].url)
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    if (width < 768 && this.state.filteredData[i].type === 'video') {
      window.open(this.state.filteredData[i].url, '_blank')
    } else {
      this.setState({ isModalOpen: true, current: index, mode: this.state.filteredData[i].type })
    }
  },
  closeModal () {
    this.setState({ isModalOpen: false })
  },
  onChangeCategory (category) {
    this.setState({ currentCategory: category, filteredData: this.getFilterdData(category) })
  },
  getFilterdData (category) {
    const data = VIDEODATA.concat(IMAGEDATA)
    return category === 'all'
      ? data
      : data.filter(x => x.type === category)
  },
  onClickNext () {
    if (this.state.current + 1 > IMAGEDATA.length - 1) {
      this.setState({ current: 0 })
    } else {
      this.setState({ current: this.state.current + 1 })
    }
  },
  onClickPrev () {
    if (this.state.current - 1 < 0) {
      this.setState({ current: IMAGEDATA.length - 1 })
    } else {
      this.setState({ current: this.state.current - 1 })
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
          data={VIDEODATA}
          onClickPreview={this.onClickPreview}
          current={VIDEODATA[this.state.current]}
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
        images={IMAGEDATA}
        onClickNext={this.onClickNext}
        onClickPrev={this.onClickPrev}
        current={this.state.current}
      />
    )
  },
  render () {
    return (
      <div className={styles.container}>
        <Title text='MAKING THE SHOW' />
        <p>
          KAAN presented by SINGHA CORPORATION คือ ประวัติศาสตร์หน้าใหม่ของการแสดงโชว์ในเมืองไทย
          ที่ได้รวบรวมสุดยอดฝีมือด้านต่างๆ ในเมืองไทย เอาไว้มากมายกว่า 600 ชีวิต
          ซึ่งทุกคนต่างทุ่มเทในการเตรียมงานโดยใช้เวลากว่า 3 ปี
          นักแสดง และทีมงานเบื้องหลังผ่านการฝึกซ้อมอย่างหนักกว่า 10 เดือน
          เพื่อให้โชว์ 90 นาทีนี้ เป็นโชว์ที่จะสร้างความประทับใจให้กับผู้ชมตลอดไป
        </p>
        <div className={styles.previewSectionContainer}>
          <PreviewSection
            data={VIDEODATA.concat(IMAGEDATA)}
            onClickPreview={this.onClickPreview}
            currentCategory={this.state.currentCategory}
            onChangeCategory={this.onChangeCategory}
          />
        </div>
        {this.state.mode === 'video' ? this.renderVideoModal() : this.renderImageModal()}
      </div>
    )
  }
})

export default MakingTheShowSection
