import React from 'react'
import Title from '../components/Title'
import styles from './IntroSection.styl'

const IntroSection = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <Title text='A SPECTACULAR CENIMATIC' />
        <Title text='LIVE EXPERIENCE' />
        <p>
          A SPECTACULAR CINEMATIC LIVE EXPERIENCE KAAN คือ การแสดงที่ผสานเทคนิคพิเศษระดับโลกเข้ากับภาพยนตร์และการแสดงสดบนเวที
          ทั้งการเต้น ยิมนาสติก กายกรรม การเชิดหุ่น การแสดงโขน ตลอดจนศิลปะการต่อสู้แบบไทย
          โดยที่เรื่องราวและตัวละครได้รับแรงบันดาลใจมาจากวรรณคดีหลายเรื่อง เพิ่มความมหัศจรรย์เกินจินตนาการด้วยภาพยนตร์สุดล้ำ
          คอมพิวเตอร์กราฟิก และโปรดักชั่นระดับโลก ผ่านการสร้างสรรค์และควบคุมโดยทีมงานชาวไทยมืออาชีพหลายร้อยชีวิต
        </p>
      </div>
    )
  }
})

export default IntroSection
