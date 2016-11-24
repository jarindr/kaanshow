import { Link } from 'react-router'
import React from 'react'
import styles from './Footer.styl'
const Footer = React.createClass({
  renderSocialBlock () {
    return (
      <div className={styles.socialBlock} style={{background: `url(${require('../assets/images/KAAN_Logo-for-Programmer_ch.png')}) center`}}>
        <div className={styles.socialCaption}>
          <img src={require('../assets/images/ig_hover.png')} width='20' />
          <div>@random_guy</div>
          <p>asdas asd asd asd asd asd asd asdas dasd asdas dasdasd asd asd asd asd asd</p>
        </div>
      </div>
    )
  },
  onClickToTop () {
    window.scrollTo(0, 0)
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
                <li><Link to='/info/download/'>DOWNLOAD PHOTO, FACT SHEET, CLIPS</Link></li>
                <li><Link to='/info/term/'>TERM & CONDITION</Link></li>
                <li><Link to='/info/disclaimer/'>DISCLIMER</Link></li>
                <li><Link to='/info/privacy/'>PRIVACY</Link></li>
                <li><Link to='/info/faq/'>FAQ</Link></li>
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
                  ADDRESS
                  <br />
                  <span style={{fontFamily: 'kanit', fontSize: '14px'}}>บริษัท ปัญลักษณ์ พาสุข จำกัด เลขที่ 202 อาคาร เลอ คองคอร์ด ห้อง 1601 ชั้น 16 ถ.รัชดาภิเษก แขวงห้วยขวาง กรุงเทพฯ 10310</span>
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
                <li className={styles.social}>
                  <img src={require('../assets/images/fb_footer.png')} />
                  <img src={require('../assets/images/ig_footer.png')} />
                  <img src={require('../assets/images/twitter_footer.png')} />
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
        <div className={styles.footerBar}>
          <span>© 2016 PANJALUCK PASUK CO., LTD. ALL RIGHTS RESERVED.</span>
          <span onClick={this.onClickToTop} style={{float: 'right', cursor: 'pointer'}}>TO THE TOP <img src={require('../assets/images/to_top.png')} style={{width: '15px'}} /></span>
        </div>
      </div>
    )
  }
})

export default Footer
