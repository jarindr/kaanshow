import Modal from 'react-modal'
import React from 'react'

import styles from './WorldOfKaanModal.styl'

const WorldOfKaanModal = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    title: React.PropTypes.string,
    subTitle: React.PropTypes.string,
    images: React.PropTypes.array
  },
  getInitialState () {
    return {
      current: 0
    }
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
        overflow: 'hidden'
      }
    }
    const style = {
      background: `url(${this.props.images[this.state.current]}) center`,
      backgroundSize: 'cover'
    }
    return (
      <Modal
        isOpen
        onRequestClose={this.closeModal}
        style={customStyles}
      >
        <div className={styles.container}>
          <div className={styles.imagePreview} style={style}>
          </div>
          <div className={styles.content}>
            <h1>{this.props.title}</h1>
            <h3>{this.props.subTitle}</h3>
            <p>
              {this.props.children}
            </p>
          </div>
        </div>
      </Modal>

    )
  }
})

export default WorldOfKaanModal
