import React from 'react'
import styles from './DownloadPage.styl'
const DATA = [
  {lang: 'THAI', file: require('../../assets/pdf/Fact Sheet_th_final_20161123.pdf')},
  {lang: 'ENGLISH', file: require('../../assets/pdf/Fact Sheet Eng_final_20161123.pdf')},
  {lang: 'RUSSIAN', file: require('../../assets/pdf/Kaanshowrus edit 21.11.59.pdf')},
  {lang: 'CHINESE', file: require('../../assets/pdf/Fact sheet Chinese_21.11.59.pdf')},
  {lang: 'VIETNAMESE', file: require('../../assets/pdf/Fact Shee t - ภาษาเวียดนาม 23.11.59.pdf')},
  {lang: 'KOREAN', file: require('../../assets/pdf/Fact Sheet thai-Korea 21.11.59.pdf')}
]
const DownloadPage = React.createClass({
  renderFactSheetBlock (data) {
    return (
      <div className={styles.factSheetBlockContainer} onClick={() => window.open(data.file)}>
        <img src={require('./assets/images/pdf.png')} />
        <div className={styles.content}>
          <div className={styles.factsheet}>FACTSHEET</div>
          <div className={styles.lang}>{data.lang}</div>
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
