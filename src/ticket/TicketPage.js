import React from 'react'
import TicketCard from './TicketCard'
import styles from './TicketPage.styl'
const TicketPage = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  renderCard (title, content) {
    return (
      <div className={styles.ticketCardContainer}>
        <TicketCard title={title} content={content} />
      </div>
    )
  },
  render () {
    return (
      <div className={styles.container}>
        <h1>TICKET</h1>
        {this.props.children}
      </div>
    )
  }
})

export default TicketPage
