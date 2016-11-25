import React from 'react'
import styles from './FaqPage.styl'

const DATA = ['คำถามเกี่ยวกับการแสดง KAAN', 'คำถามเกี่ยวกับ ดีลักษณ์ ซีเนมาติก เธียเตอร์ (D’LUCK Cinematic Theatre)', 'คำถามเกี่ยวกับการสำรองที่นั่ง / ส่วนลดต่างๆ/ และวิธีการซื้อบัตร', 'คำถามอื่นๆ']

const FaqPage = React.createClass({
  renderCategory (category) {
    return (
      <div className={styles.category}>{category}</div>
    )
  },
  renderCategories () {
    return DATA.map(x => this.renderCategory(x))
  },
  render () {
    return (
      <div className={styles.container}>
        <h1>FAQ</h1>
        <div className={styles.categoriesContainer}>
          {this.renderCategories()}
        </div>
      </div>
    )
  }
})

export default FaqPage
