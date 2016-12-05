import Modal from 'react-modal'
import React from 'react'
import styles from './SocialFeedModal.styl'

const SocialFeedModal = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    mention: React.PropTypes.string,
    image: React.PropTypes.string,
    isModalOpen: React.PropTypes.bool,
    closeModal: React.PropTypes.func,
    onClickPrev: React.PropTypes.func,
    onClickNext: React.PropTypes.func
  },
  render () {
    const customStyles = {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
        overflow: 'hidden',
        width: '900px',
        backgroundColor: 'transparent'
      }
    }
    const style = {
      background: `url(${this.props.image}) center`,
      backgroundSize: 'cover'
    }
    return (
      <Modal
        isOpen={this.props.isModalOpen}
        onRequestClose={this.props.closeModal}
        style={customStyles}
        >
        <div className={styles.container}>
          <img src={require('../assets/images/next.png')} className={styles.arrowLeft} onClick={this.props.onClickNext} />
          <div className={styles.imagePreview} style={style}></div>
          <div className={styles.contentContainer}>
            <img src={require('../assets/images/ig_footer.png')} />
            <h1>{this.props.mention || '@GDH'}</h1>
            <p dangerouslySetInnerHTML={{ __html: this.props.children }}></p>
          </div>
        </div>
        <img src={require('../assets/images/next.png')} className={styles.arrowRight}onClick={this.props.onClickPrev} />
      </Modal>
    )
  }
})

export default SocialFeedModal
