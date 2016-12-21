import { Link } from 'react-router'
import React from 'react'
import styles from './TicketForm.styl'
const TicketForm = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.closeButtonContainer}>
          <Link to='/ticket/type'>BACK TO TICKET <img src={require('../assets/images/closeButton.png')} /></Link>
        </div>
        <h1>กรอกรายละเอียด</h1>
        <div className={styles.col12}>
          <h2>บริษัท / โรงเรียน / มหาวิทยาลัย</h2>
          <input></input>
        </div>
        <div className={styles.col3}>
          <h2>ชื่อ</h2>
          <input></input>
        </div>
        <div className={styles.col3}>
          <h2>นามสกุล</h2>
          <input></input>
        </div>
        <div className={styles.col3}>
          <h2>อีเมล์</h2>
          <input></input>
        </div>
        <div className={styles.col12}>
          <h2>ที่อยู่</h2>
          <textarea rows='4'></textarea>
        </div>
        <div className={styles.col6} style={{width: '50%'}}>
          <h2>จังหวัด</h2>
          <input></input>
        </div>
        <div className={styles.col6} style={{width: '50%'}}>
          <h2>รหัสไปรษณีย์</h2>
          <input></input>
        </div>
        <div className={styles.col3}>
          <h2>จำนวนผู้เข้าชม*</h2>
          <input></input>
        </div>
        <div className={styles.col6}>
          <h2>รายละเอียดเพิ่มเติม</h2>
          <input></input>
        </div>
        <button type='button'>SUBMIT</button>
        <div style={{textAlign: 'left', fontSize: '14px'}}>*สามารถจองได้ตั้งแต่ 11 คนขึ้นไป</div>
      </div>
    )
  }
})

export default TicketForm
