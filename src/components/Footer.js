import React from 'react'
import styles from './Footer.styl'
const Footer = React.createClass({
  renderSocialBlock () {
    return (
      <div className={styles.socialBlock} style={{background: `url(${require('../assets/images/KAAN_Logo-for-Programmer_ch.png')}) center`}}>
        <div className={styles.socialCaption}></div>
      </div>
    )
  },
  render () {
    return (
      <div className={styles.container} id='footer-hack'>
        <div className={styles.socialFeed}>
          {this.renderSocialBlock()}
          {this.renderSocialBlock()}
          {this.renderSocialBlock()}
          {this.renderSocialBlock()}
          {this.renderSocialBlock()}
          {this.renderSocialBlock()}
        </div>
        <div className={styles.newsLetter}>
          <h1>JOIN OUR NEWSLETTER</h1>
          <input type='text' placeholder='YOUR EMAIL ADDRESS' />
          <div className={styles.joinUsButton}>JOIN US</div>
        </div>
        <div className={styles.siteMapContact}>
          <div className={styles.siteMap}>
            <h2>SITEMAP</h2>
            <div className={styles.siteMapBlock}>
              <ul>
                <li>KAAN SHOW</li>
                <li>INTRO TO KAAN</li>
                <li>KAAN CLIP</li>
                <li>THE STORY</li>
                <li>KAAN GALLERY</li>
              </ul>
            </div>
            <div className={styles.siteMapBlock}>
              <ul>
                <li>D'LUCK</li>
                <li>ABOUT D'LUCK</li>
                <li>GALLERY</li>
                <li>SEATING PLAN</li>
                <li>THEATER 360</li>
                <li>FACILITIES</li>
                <li>LOCATION & MAP</li>
              </ul>
            </div>
            <div className={styles.siteMapBlock}>
              <ul>
                <li>PANJALUCK</li>
                <li>OUR BUSINESS</li>
                <li>VISION & MISSION</li>
                <li>CORPORATE VALUE</li>
                <li>BOARD PROFILE</li>
                <li>OUR PARTNER</li>
                <li>WORK WITH US</li>
              </ul>
            </div>
            <div className={styles.siteMapBlock}>
              <ul>
                <li>INFO & DOWNLOAD</li>
                <li>NEWS</li>
                <li>DOWNLOAD</li>
                <li>PHOTO, FACT SHEET, CLIPS</li>
                <li>TERM & CONDITION</li>
                <li>DISCLIMER</li>
                <li>PRIVACY</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className={styles.siteMapBlock}>
              <ul>
                <li>BOOKING TICKET</li>
                <li>PACKAGE & PROMOTION</li>
              </ul>
            </div>
          </div>
          <div className={styles.contact}>
            <h2>CONTACT</h2>
            <div className={styles.siteMapBlock}>
              <ul>
                <li>CONTACT</li>
                <li>
                  ADDRESS<br />
                บริษัท ปัญลักษณ์ พาสุข จำกัด เลขที่ 202 อาคาร เลอ คองคอร์ด ห้อง 1601 ชั้น 16 ถ.รัชดาภิเษก แขวงห้วยขวาง กรุงเทพฯ 10310
                </li>
              </ul>
            </div>
            <div className={styles.siteMapBlock}>
              <ul>
                <li>PHONE</li>
                <li>
                  +66 2 694 2007
                </li>
                <li>
                  +66 2 694 2008
                </li>
                <li className={styles.fax}>FAX</li>
                <li>
                  +66 2 694 2009
                </li>
              </ul>
            </div>
            <div className={styles.siteMapBlock}>
              <ul>
                <li>EMAIL</li>
                <li>
                  CONTACT@PUNJALUCK.COM
                </li>
              </ul>
            </div>
            <div className={styles.contactFrom}>
              <ul>
                <li>CONTACT US</li>
                <input type='text' placeholder='Enter Your Name' />
                <input type='text' placeholder='Enter Your Email' />
                <textarea type='text' placeholder='Your Message'></textarea>
                <div className={styles.sendEmail}>SEND MESSAGE</div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Footer
