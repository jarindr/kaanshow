import Modal from 'react-modal'
import React from 'react'
import styles from './WorldOfKaanModal.styl'

const WorldOfKaanModal = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    title: React.PropTypes.string,
    subTitle: React.PropTypes.string,
    images: React.PropTypes.array,
    isModalOpen: React.PropTypes.bool,
    closeModal: React.PropTypes.func
  },
  getInitialState () {
    return {
      current: 0
    }
  },
  onClickShare (url, type) {
    const $window = $(window)
    const height = $window.height()
    const width = $window.width()
    const top = (height / 2) - 125
    const left = (width / 2) - 300
    const urlSharer = type === 'facebook' ? `https://www.facebook.com/sharer/sharer.php?u=${url}` : `https://twitter.com/intent/tweet?url=${url}`
    window.open(urlSharer, 'targetWindow', `toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250,top=${top},left=${left}`)
  },
  render () {
    const customStyles = {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
        width: '90vw',
        backgroundColor: 'transparent'
      }
    }
    const style = {
      background: `url(${this.props.images[this.state.current]}) center`,
      backgroundSize: 'cover'
    }
    return (
      <Modal
        isOpen={this.props.isModalOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
      >
        <div className={styles.container}>
          <div className={styles.imagePreview} style={style}>
            <img src={require('../assets/images/next.png')} className={styles.arrowRight} />
            <img src={require('../assets/images/next.png')} className={styles.arrowLeft} />
            <div className={styles.titleImage}>{`${this.props.title} (${this.props.subTitle})`}</div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.closeModalContainer}>
              <img src={require('../assets/images/closeButtonBlack.png')} onClick={this.props.closeModal} className={styles.closeModal} />
              <span className={styles.backWorld}>BACK TO WORLD</span>
            </div>
            <div className={styles.content}>
              <h1>{this.props.title}</h1>
              <h3>({this.props.subTitle})</h3>
              <p dangerouslySetInnerHTML={{ __html: this.props.children }}>
              </p>
            </div>
            <div className={styles.social}>
              <div className={styles.socialRadial} onClick={() => this.onClickShare('https://kaanshow-ec4c0.firebaseapp.com', 'facebook')}>
                <i className='flaticon-facebook'></i>
              </div>
              <div className={styles.socialRadial} onClick={() => this.onClickShare('https://kaanshow-ec4c0.firebaseapp.com', 'twitter')}>
                <i className='flaticon-twitter'></i>
              </div>
            </div>
          </div>
        </div>
      </Modal>

    )
  }
})

export default WorldOfKaanModal
