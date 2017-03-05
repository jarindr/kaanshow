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
    return (
      <Modal
        isOpen={this.props.isModalOpen}
        onRequestClose={this.props.closeModal}
        className={styles.modal}
        overlayClassName={styles.overlayModal}
        >
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img src={this.props.image} />
          </div>
          <img src={require('../assets/images/next.png')} className={styles.arrowRight}onClick={this.props.onClickPrev} />
          <img src={require('../assets/images/next.png')} className={styles.arrowLeft} onClick={this.props.onClickNext} />
          <img src={require('../assets/images/closeButtonBlack.png')} className={styles.closeButton} onClick={this.props.closeModal} />
          <div className={styles.contentContainer}>
            <img src={require('../assets/images/ig_footer.png')} />
            <h1>{this.props.mention || '@GDH'}</h1>
            <p dangerouslySetInnerHTML={{ __html: this.props.children }}></p>
          </div>
        </div>
      </Modal>
    )
  }
})

export default SocialFeedModal
