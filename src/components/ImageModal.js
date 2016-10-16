import Modal from 'react-modal'
import React from 'react'

import styles from './ImageModal.styl'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 999
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 'none',
    margin: 0,
    background: 'none'
  }
}

const ImageModalBox = React.createClass({
  propTypes: {
    images: React.PropTypes.array,
    isModalOpen: React.PropTypes.bool.isRequired,
    closeModal: React.PropTypes.func.isRequired
  },
  getInitialState () {
    return {
      current: 0
    }
  },
  onClickNext () {
    if (this.state.current + 1 > this.props.images.length - 1) {
      this.setState({current: 0})
    } else {
      this.setState({current: this.state.current + 1})
    }
  },
  onClickPrev () {
    if (this.state.current - 1 < 0) {
      this.setState({current: this.props.images.length - 1})
    } else {
      this.setState({current: this.state.current - 1})
    }
  },
  closeModal () {
    this.props.closeModal()
    this.setState({current: 0})
  },
  render () {
    return (
      <Modal
        isOpen={this.props.isModalOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
      >
        <div className={styles.container}>
          <img src={require('../assets/images/next.png')} className={styles.arrowLeft} onClick={this.onClickNext} />
          <img src={this.props.images[this.state.current]} className={styles.imageShow} />
          <img src={require('../assets/images/next.png')} className={styles.arrowRight}onClick={this.onClickPrev} />
        </div>
      </Modal>
    )
  }
})

export default ImageModalBox
