import Modal from 'react-modal'
import React from 'react'

import styles from './KaanClipSection.styl'
import PreviewListSection from '../components/PreviewListSection'
import PreviewSection from '../components/PreviewSection'

const DATA = [
  {url: 'https://www.youtube.com/watch?v=QC4xnfh_-Eo', caption: 'hello'},
  {url: 'https://www.youtube.com/watch?v=Ejj2t6tJfEU', caption: 'hello'},
  {url: 'https://www.youtube.com/watch?v=tgQpUTDBI1A', caption: 'hello'},
  {url: 'https://www.youtube.com/watch?v=PFRJvHXaNBk', caption: 'hello'},
  {url: 'https://www.youtube.com/watch?v=cL4uhaQ58Rk', caption: 'hello'},
  {url: 'https://www.youtube.com/watch?v=X2kGaP7N2VA', caption: 'hello'}
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
      listAcitve: false
    }
  },
  onClickPreview (id, e) {
    this.setState({ listAcitve: true, current: id })
  },
  closeModal () {
    this.setState({ listAcitve: false })
  },
  renderList (data) {
    if (this.state.listAcitve) {
      return (
        <Modal
          isOpen
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <PreviewListSection data={DATA} current={this.state.current} />
        </Modal>
      )
    }
  },
  render () {
    return (
      <div className={styles.container}>
        <PreviewSection data={DATA} onClickPreview={this.onClickPreview} />
        {this.renderList()}
      </div>
    )
  }
})

export default KaanClipSection
