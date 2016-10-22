import Modal from 'react-modal'
import PreviewListSection from '../components/PreviewListSection'
import PreviewSection from '../components/PreviewSection'
import React from 'react'
import Title from '../components/Title'
import styles from './KaanClipSection.styl'

const DATA = [
  {url: 'https://www.youtube.com/watch?v=QC4xnfh_-Eo', caption: 'hello'},
  {url: 'https://www.youtube.com/watch?v=Ejj2t6tJfEU', caption: 'hello'},
  {url: 'https://www.youtube.com/watch?v=tgQpUTDBI1A', caption: 'hello'},
  {url: 'https://www.youtube.com/watch?v=PFRJvHXaNBk', caption: 'hello'},
  {url: 'https://www.youtube.com/watch?v=cL4uhaQ58Rk', caption: 'hello'},
  {url: 'https://www.youtube.com/watch?v=X2kGaP7N2VA', caption: 'hello'},
  {url: 'https://www.youtube.com/watch?v=X2kGaP7N2VA', caption: 'hello'},
  {url: 'https://www.youtube.com/watch?v=tgQpUTDBI1A', caption: 'hello'},
  {url: 'https://www.youtube.com/watch?v=X2kGaP7N2VA', caption: 'hello'},
  {url: 'https://www.youtube.com/watch?v=X2kGaP7N2VA', caption: 'hello'},
  {url: 'https://www.youtube.com/watch?v=PFRJvHXaNBk', caption: 'hello'}
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
      isModalOpen: false
    }
  },
  onClickPreview (data) {
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
        <Title text='KAAN CLIPS' />
        <div className={styles.PreviewSectionContainer}>
          <PreviewSection data={DATA} onClickPreview={this.onClickPreview} />
        </div>
        {this.renderVideoModal()}
      </div>
    )
  }
})

export default KaanClipSection
