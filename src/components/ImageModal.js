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
    background: 'none',
    width: '65vw',
    overflow: 'visible'
  }
}

const ImageModalBox = React.createClass({
  propTypes: {
    image: React.PropTypes.string,
    caption: React.PropTypes.string,
    isModalOpen: React.PropTypes.bool.isRequired,
    closeModal: React.PropTypes.func.isRequired,
    current: React.PropTypes.number.isRequired,
    onClickNext: React.PropTypes.func.isRequired,
    onClickPrev: React.PropTypes.func.isRequired
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
          <div className={styles.caption}>THIS IS A CAPTION</div>
          <img src={require('../assets/images/closeButtonBlack.png')} className={styles.closeButton} onClick={this.closeModal} />
          <img src={require('../assets/images/next.png')} className={styles.arrowLeft} onClick={this.props.onClickPrev} />
          <img src={this.props.image} className={styles.imageShow} />
          <img src={require('../assets/images/next.png')} className={styles.arrowRight}onClick={this.props.onClickNext} />
        </div>
      </Modal>
    )
  }
})

export default ImageModalBox
