import React from 'react'
import Title from '../components/Title'
import styles from './IntroSection.styl'

const IntroSection = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <Title text='A SPECTACULAR CINEMATIC' />
        <Title text='LIVE EXPERIENCE' />
        <p>
          KAAN presented by SINGHA CORPORATION คือ การแสดงที่ผสานเทคนิคพิเศษระดับโลกเข้ากับภาพยนตร์ และการแสดงสดบนเวที
          ทั้งการเต้น ยิมนาสติก กายกรรม การเชิดหุ่น การแสดงโขน ตลอดจนศิลปะการต่อสู้แบบไทย
          โดยที่เรื่องราว และตัวละครได้รับแรงบันดาลใจมาจากวรรณคดีหลายเรื่อง เพิ่มความมหัศจรรย์เกินจินตนาการด้วยภาพยนตร์สุดล้ำ
          คอมพิวเตอร์กราฟิก  และโปรดักชั่นระดับโลก ผ่านการสร้างสรรค์ และควบคุมโดยทีมงานชาวไทยมืออาชีพหลายร้อยชีวิต
        </p>
      </div>
    )
  }
})

export default IntroSection
