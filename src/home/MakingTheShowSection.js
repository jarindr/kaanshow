import Modal from 'react-modal'
import React from 'react'

import styles from './MakingTheShowSection.styl'
import PreviewListSection from '../components/PreviewListSection'
import PreviewSection from '../components/PreviewSection'
import Title from '../components/Title'

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
      isModalOpen: false
    }
  },
  onClickPreview (data, e) {
    this.setState({ isModalOpen: true, current: data })
  },
  closeModal () {
    this.setState({ isModalOpen: false })
  },
  renderVideoModal (data) {
    return (
      <Modal
        isOpen={this.state.isModalOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
      >
        <PreviewListSection data={DATA} onClickPreview={this.onClickPreview} current={this.state.current} />
      </Modal>
    )
  },
  render () {
    return (
      <div className={styles.container}>
        <Title text='MAKING THE SHOW' />
          <p>เบนโลคอมพ์สตาร์หลวงพี่ ไลฟ์ผู้นำ สตรอเบอร์รีแจมปูอัด รวมมิตรโอเพ่น โลชั่น วีเจลิมูซีนคูลเลอร์ แอ็คชั่นลิมูซีนคอมเมนท์
          แพทยสภาเบิร์ด อาร์ติสต์อีสเตอร์เห่ยเด้อเพรส มหาอุปราชาเลกเชอร์บาลานซ์ สติกเกอร์เบลอดิกชันนารีฮิปโป
          ปักขคณนา เทรนด์แบคโฮกุนซือไอซ์หงวน บอมบ์ แอ๊บแบ๊วบู๊หมิง อพาร์ตเมนท์
        อัลมอนด์ เมาท์สโรชาไฮไลต์ปาสคาล มวลชนทาวน์เอ๋แฟรี่โมจิ โชว์รูมอัตลักษณ์ ไฮเอนด์พะเรอสแล็กโอ้ยอัลมอนด์ พฤหัสบอดี้
        อุปสงค์ซื่อบื้อศิลปวัฒนธรรมฮัลโหล อัลตราเลิฟรีไซเคิลโชว์รูม เฟอร์นิเจอร์เมาท์ออดิชั่น โบว์ลิ่งว้าวฮ่องเต้พาร์ชินบัญชร เท็กซ์เซี้ยว วอล์คซามูไรช็อต
        มลภาวะพฤหัสราเม็งศิลปากรแคนยอน ฟยอร์ดแดนซ์ซื่อบื้อ เดชานุภาพบุญคุณ หน่อมแน้มพาสต้าช็อปโปสเตอร์</p>
      <div className={styles.previewSectionContainer}>
          <PreviewSection data={DATA} onClickPreview={this.onClickPreview} />
        </div>
        {this.renderVideoModal()}
      </div>
    )
  }
})

export default MakingTheShowSection
