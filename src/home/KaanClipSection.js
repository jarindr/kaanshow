import Modal from 'react-modal'
import React from 'react'

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
      listAcitve: true
    }
  },
  onClickPreview () {
    this.setState({ listAcitve: true })
  },
  renderList (data) {
    if (this.state.listAcitve) {
      return (
        <Modal
          isOpen
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <PreviewListSection data={DATA} />
        </Modal>
      )
    }
  },
  render () {
    return (
      <div>
        <PreviewSection data={DATA} onClickPreview={this.onClickPreview} />
        {this.renderList()}
      </div>
    )
  }
})

export default KaanClipSection
