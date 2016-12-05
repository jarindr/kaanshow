import React from 'react'
import styles from './DownloadPage.styl'
const DATA = ['THAI', 'ENGLISH', 'RUSSIAN', 'CHINESE', 'VIETNAMESE', 'KOREAN']
const DownloadPage = React.createClass({
  renderFactSheetBlock (lang) {
    return (
      <div className={styles.factSheetBlockContainer}>
        <img src={require('./assets/images/pdf.png')} />
        <div className={styles.content}>
          <div className={styles.factsheet}>FACTSHEET</div>
          <div className={styles.lang}>{lang}</div>
        </div>
      </div>
    )
  },
  render () {
    return (
      <div className={styles.container}>
        <h1>DOWNLOAD</h1>
        {DATA.map(x => this.renderFactSheetBlock(x))}
      </div>
    )
  }
})

export default DownloadPage
