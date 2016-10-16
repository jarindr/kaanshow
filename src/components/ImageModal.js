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
  render () {
    return (
      <Modal
        isOpen={this.props.isModalOpen}
        onRequestClose={this.props.closeModal}
        style={customStyles}
      >
        <div className={styles.container}>
          <img src={require('../assets/images/next.png')} className={styles.arrowLeft} />
          <img src={this.props.images[this.state.current]} className={styles.imageShow} />
          <img src={require('../assets/images/next.png')} className={styles.arrowRight} />
        </div>
      </Modal>
    )
  }
})

export default ImageModalBox
