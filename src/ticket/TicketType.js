import React from 'react'
import TicketCard from './TicketCard'
import styles from './TicketType.styl'
const DATA = [
  {
    title: 'Show Only',
    content: 'ตื่นตาตื่นใจกับการแสดงรูปแบบใหม่ KAAN presented by SINGHA CORPORATION โชว์ไทยโปรดักชั่นระดับโลกที่จะทำให้คุณได้สัมผัสประสบการณ์สุดประทับใจแบบไม่มีวันลืมตลอด 90 นาที',
    link: 'https://www.pandapass.asia/booking/external/5?productCategoryCode=S01'
  },
  {
    title: 'Show & Stay',
    content: `Package ที่พักในโรงแรมมีระดับที่มอบข้อเสนอสุดพิเศษในราคาที่คุ้มค่าที่สุด พร้อมตื่นตาตื่นใจกับการแสดงรูปแบบใหม่
    KAAN presented by SINGHA CORPORATION โชว์ไทยโปรดักชั่นระดับโลกที่จะทำให้คุณได้สัมผัสประสบการณ์สุดประทับใจแบบไม่มีวันลืมตลอด 90 นาที`,
    link: '/ticket/showandstay/'
  },
  {
    title: 'Show & Meal',
    content: `อาหารมื้อพิเศษที่เตรียมไว้สำหรับคุณโดยเฉพาะ สามารถเลือกทานก่อน หรือหลังการแสดงได้
     หรือจะเลือกเติมเต็มความสุขขณะรับชมการแสดงด้วยชุดขนมขบเคี้ยว และเครื่องดื่มที่คุณสามารถเลือกได้ตามต้องการ
    พร้อมตื่นตาตื่นใจกับการแสดงรูปแบบใหม่ KAAN presented by SINGHA CORPORATION โชว์ไทยโปรดักชั่นระดับโลกที่จะทำให้คุณได้สัมผัสประสบการณ์สุดประทับใจแบบไม่มีวันลืมตลอด 90 นาที`,
    link: 'https://www.pandapass.asia/booking/external/5?productCategoryCode=M01'
  },
  {
    title: 'Show & Go',
    content: `เพิ่มความสะดวกสบายในการเดินทางด้วยบริการในรูปแบบต่างๆ อาทิ บริการรถรับส่ง เป็นต้น พร้อมตื่นตาตื่นใจกับการแสดงรูปแบบใหม่
    KAAN presented by SINGHA CORPORATION โชว์ไทยโปรดักชั่นระดับโลกที่จะทำให้คุณได้สัมผัสประสบการณ์สุดประทับใจแบบไม่มีวันลืมตลอด 90 นาที พร้อม`,
    link: 'https://www.pandapass.asia/booking/external/5?productCategoryCode=T01'
  },
  {
    title: 'Promotion',
    content: `รับข้อเสนอสุดพิเศษ  และโปรโมชั่นอื่นๆ อีกมากมาย พร้อมตื่นตาตื่นใจกับการแสดงรูปแบบใหม่ KAAN presented by SINGHA CORPORATION
    โชว์ไทยโปรดักชั่นระดับโลกที่จะทำให้คุณได้สัมผัสประสบการณ์สุดประทับใจแบบไม่มีวันลืมตลอด 90 นาที`
  },
  {
    title: 'Group Ticket',
    content: `ระบบสำรองที่นั่งรูปแบบหมู่คณะ (ตั้งแต่ 10 ท่านขึ้นไป) ที่จะช่วยให้คุณสำรองที่นั่งสะดวกยิ่งขึ้น  และยังได้รับข้อเสนอสุดคุ้ม
    พร้อมตื่นตาตื่นใจกับการแสดงรูปแบบใหม่ KAAN presented by SINGHA CORPORATION โชว์ไทยโปรดักชั่นระดับโลกที่จะทำให้คุณได้สัมผัสประสบการณ์สุดประทับใจแบบไม่มีวันลืมตลอด 90 นาที`,
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
