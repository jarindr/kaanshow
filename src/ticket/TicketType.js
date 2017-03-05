import React from 'react'
import TicketCard from './TicketCard'
import styles from './TicketType.styl'
const DATA = [
  {
    title: 'Show Only',
    content: 'ตื่นตาตื่นใจกับการแสดงรูปแบบใหม่ KAAN presented by SINGHA CORPORATION โชว์ไทยโปรดักชั่น<br>ระดับโลกที่จะทำให้คุณได้สัมผัสประสบการณ์สุดประทับใจ<br>แบบไม่มีวันลืมตลอด 90 นาที',
    link: 'https://www.pandapass.asia/booking/external/5?productCategoryCode=S01'
  },
  {
    title: 'Show & Stay',
    content: `Package ที่พักในโรงแรมมีระดับที่มอบ<br>ข้อเสนอสุดพิเศษ ในราคาที่คุ้มค่าที่สุด พร้อมตื่นตาตื่นใจกับการแสดง<br>รูปแบบใหม่
    KAAN presented by <br>SINGHA CORPORATION โชว์ไทย<br>โปรดักชั่นระดับโลกที่จะทำให้คุณได้สัมผัสประสบการณ์สุดประทับใจ<br>แบบไม่มีวันลืมตลอด 90 นาที`,
    link: '/ticket/showandstay/'
  },
  {
    title: 'Show & Meal',
    content: `อาหารมื้อพิเศษที่เตรียมไว้สำหรับคุณ<br>โดยเฉพาะ สามารถเลือกทานก่อน<br> หรือหลังการแสดงได้
     หรือจะเลือก<br>เติมเต็มความสุขขณะรับชมการแสดงด้วย<br>ชุดขนมขบเคี้ยว และเครื่องดื่มที่คุณสามารถเลือกได้ตามต้องการ<br>
    พร้อมตื่นตาตื่นใจกับการแสดง<br>รูปแบบใหม่ KAAN presented by<br> SINGHA CORPORATION โชว์ไทย<br>โปรดักชั่นระดับโลกที่จะทำให้คุณได้สัมผัสประสบการณ์สุดประทับใจ<br>แบบไม่มีวันลืมตลอด 90 นาที`,
    link: 'https://www.pandapass.asia/booking/external/5?productCategoryCode=M01'
  },
  {
    title: 'Show & Go',
    content: `เพิ่มความสะดวกสบายในการเดินทางด้วยบริการในรูปแบบต่างๆ อาทิ<br> บริการรถรับส่ง เป็นต้น<br>พร้อมตื่นตาตื่นใจกับการแสดง<br>รูปแบบใหม่
    KAAN presented by <br>SINGHA CORPORATION โชว์ไทย<br>โปรดักชั่นระดับโลกที่จะทำให้คุณได้สัมผัสประสบการณ์สุดประทับใจ<br>แบบไม่มีวันลืมตลอด 90 นาที`,
    link: 'https://www.pandapass.asia/booking/external/5?productCategoryCode=T01'
  },
  {
    title: 'Promotion',
    content: `รับข้อเสนอสุดพิเศษ  และโปรโมชั่นอื่นๆ <br>อีกมากมาย<br>พร้อมตื่นตาตื่นใจกับการแสดง<br>รูปแบบใหม่ KAAN presented by<br>SINGHA CORPORATION
    โชว์ไทยโปรดักชั่นระดับโลกที่จะทำให้คุณได้สัมผัสประสบการณ์สุดประทับใจ<br>แบบไม่มีวันลืมตลอด 90 นาที`
  },
  {
    title: 'Group Ticket',
    content: `ระบบสำรองที่นั่งรูปแบบหมู่คณะ<br> (ตั้งแต่ 10 ท่านขึ้นไป) ที่จะช่วยให้คุณสำรองที่นั่งสะดวกยิ่งขึ้น  และยังได้รับข้อเสนอสุดคุ้ม<br>
    พร้อมตื่นตาตื่นใจกับการแสดง<br>รูปแบบใหม่ KAAN presented by<br>SINGHA CORPORATION โชว์ไทย<br>โปรดักชั่นระดับโลกที่จะทำให้คุณได้สัมผัสประสบการณ์สุดประทับใจ<br>แบบไม่มีวันลืมตลอด 90 นาที`,
    link: '/ticket/form/'
  }
]
const TicketPage = React.createClass({
  renderCard (data) {
    return (
      <div className={styles.ticketCardContainer}>
        <TicketCard title={data.title} content={data.content} link={data.link} />
      </div>
    )
  },
  render () {
    return (
      <div className={styles.ticketsContainer}>
        {DATA.map(x => this.renderCard(x))}
      </div>
    )
  }
})

export default TicketPage
