import { Link } from 'react-router'
import React from 'react'
import styles from './TicketShowAndStay.styl'
const TicketForm = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.closeButtonContainer}>
          <Link to='/ticket/type'>BACK TO TICKET <img src={require('../assets/images/closeButton.png')} /></Link>
        </div>
        <h2>SHOW + ACCOMMODATION</h2>
        <div className={styles.imagesContainer}>
          <a href='http://www.centarahotelsresorts.com/centaragrand/cgpx/​' target='_blank'>
            <div className={styles.block}>
              <img src={require('./assets/images/centara.png')} />
              CENTARA GRAND PHRATAMNAK
            </div>
          </a>
          <a href='http://www.royalcliff.com/​' target='_blank'>
            <div className={styles.block}>
              <img src={require('./assets/images/royal.png')} />
              ROYAL CLIFF HOTELS GROUP
            </div>
          </a>
          <a href='http://www.centarahotelsresorts.com/centra/cah/​' target='_blank'>
            <div className={styles.block}>
              <img src={require('./assets/images/centra.png')} />
              CENTRA AVENUE HOTEL
            </div>
          </a>
        </div>
      </div>
    )
  }
})

export default TicketForm
