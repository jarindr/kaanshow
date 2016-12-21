import React from 'react'
import styles from './TicketCard.styl'
const TicketCard = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    content: React.PropTypes.string,
    link: React.PropTypes.string
  },
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.borderContainer}>
            <h1>{this.props.title}</h1>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <p dangerouslySetInnerHTML={{ __html: this.props.content }}></p>
        </div>
        <a href={this.props.link} target='_blank'><button type='button'>BUY TICKET</button></a>
      </div>
    )
  }
})

export default TicketCard
