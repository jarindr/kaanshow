import Modal from 'react-modal'
import React from 'react'
import styles from './ImageModal.styl'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 999999
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
    onClickNext: React.PropTypes.func.isRequired,
    onClickPrev: React.PropTypes.func.isRequired,
    images: React.PropTypes.array,
    current: React.PropTypes.number
  },
  getInitialState () {
    return {
      current: this.props.current
    }
  },
  componentWillReceiveProps (nextProps) {
    this.setState({
      current: nextProps.current
    })
  },
  closeModal () {
    this.props.closeModal()
  },
  onClickNext () {
    this.props.onClickNext()
    if (this.props.images) {
      if (this.state.current + 1 > this.props.images.length - 1) {
        this.setState({ current: 0 })
      } else {
        this.setState({ current: this.state.current + 1 })
      }
    }
  },
  onClickPrev () {
    this.props.onClickPrev()
    if (this.props.images) {
      if (this.state.current - 1 < 0) {
        this.setState({ current: this.props.images.length - 1 })
      } else {
        this.setState({ current: this.state.current - 1 })
      }
    }
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
          <img src={require('../assets/images/next.png')} className={styles.arrowLeft} onClick={this.onClickPrev} />
          <img src={this.props.images ? this.props.images[this.state.current].url : this.props.image} className={styles.imageShow} />
          <img src={require('../assets/images/next.png')} className={styles.arrowRight} onClick={this.onClickNext} />
        </div>
      </Modal>
    )
  }
})

export default ImageModalBox
