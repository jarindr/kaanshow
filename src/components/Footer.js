import { Link } from 'react-router'
import React from 'react'
import SocialFeedModal from './SocialFeedModal'
import isEmail from 'validator/lib/isEmail'
import styles from './Footer.styl'
const DATA = [
  {image: require('../assets/images/footer_dummy/1.png'), mention: '@kaanshow', comment: 'this is fantastic1'},
  {image: require('../assets/images/footer_dummy/2.png'), mention: '@kaanshow', comment: 'this is fantastic2'},
  {image: require('../assets/images/footer_dummy/3.png'), mention: '@kaanshow', comment: 'this is fantastic3'},
  {image: require('../assets/images/footer_dummy/4.png'), mention: '@kaanshow', comment: 'this is fantastic4'},
  {image: require('../assets/images/footer_dummy/5.png'), mention: '@kaanshow', comment: 'this is fantastic5'},
  {image: require('../assets/images/footer_dummy/6.png'), mention: '@kaanshow', comment: 'this is fantastic6'},
  {image: require('../assets/images/footer_dummy/KAAN_Social Feed_Row2_01.png'), mention: '@kaanshow', comment: 'this is fantastic7'},
  {image: require('../assets/images/footer_dummy/KAAN_Social Feed_Row2_02.png'), mention: '@kaanshow', comment: 'this is fantastic8'},
  {image: require('../assets/images/footer_dummy/KAAN_Social Feed_Row2_03.png'), mention: '@kaanshow', comment: 'this is fantastic9'},
  {image: require('../assets/images/footer_dummy/KAAN_Social Feed_Row2_04.png'), mention: '@kaanshow', comment: 'this is fantastic10'},
  {image: require('../assets/images/footer_dummy/KAAN_Social Feed_Row2_05.png'), mention: '@kaanshow', comment: 'this is fantastic11'},
  {image: require('../assets/images/footer_dummy/KAAN_Social Feed_Row2_06.png'), mention: '@kaanshow', comment: 'this is fantastic12'}
]
const Footer = React.createClass({
  getInitialState () {
    return {
      isModalOpen: false,
      current: 0,
      subscribeSuccess: ''
    }
  },
  onClickSubscribe () {
    if (isEmail(this.subscribeForm.value)) {
      $.ajax({
        url: 'http://kaanshow.us12.list-manage.com/subscribe/post?u=f8db058f47508e16789a956f4&amp;id=031758e44e'.replace('/post?', '/post-json?').concat('&c=?'),
        data: { EMAIL: this.subscribeForm.value },
        success: this.onSubscribeSuccess,
        dataType: 'jsonp',
        error: (resp, text) => {
          this.setState({subscribeSuccess: resp})
        }
      })
    } else {
      this.setState({subscribeSuccess: 'please enter a valid email.'})
    }
  },
  onSubscribeSuccess (response) {
    this.setState({subscribeSuccess: 'thank you for subscribing, please confirm in your email.'})
    setTimeout(() => {
      this.setState({subscribeSuccess: ''})
    }, 3000)
  },
  renderSocialBlock (data, i) {
    return (
      <div
        className={styles.socialBlock}
        style={{background: `url(${data.image}) center no-repeat`, backgroundSize: '102%'}}
        onClick={this.onClickSocialBlock.bind(null, i)}
        >
        <div className={styles.socialCaption}>
          <img src={require('../assets/images/ig_hover.png')} width='20' />
          <div>{data.mention}</div>
          <p>{data.comment}</p>
        </div>
      </div>
    )
  },
  onClickSocialBlock (data, e) {
    this.setState({isModalOpen: true, current: data})
  },
  onClickNext () {
    if (this.state.current + 1 > DATA.length - 1) {
      this.setState({current: 0})
    } else {
      this.setState({current: this.state.current + 1})
    }
  },
  onClickPrev () {
    if (this.state.current - 1 < 0) {
      this.setState({current: DATA.length - 1})
    } else {
      this.setState({current: this.state.current - 1})
    }
  },
  onCloseModal () {
    this.setState({isModalOpen: false})
  },
  onClickToTop () {
    window.scrollTo(0, 0)
  },
  render () {
    return (
      <div>
        <div className={styles.container}>
          <SocialFeedModal
            title={DATA[this.state.current].mention}
            image={DATA[this.state.current].image}
            isModalOpen={this.state.isModalOpen}
            closeModal={this.onCloseModal}
            onClickPrev={this.onClickPrev}
            onClickNext={this.onClickNext}
            >
            {DATA[this.state.current].comment}
          </SocialFeedModal>
          <div className={styles.containerFooter} id='footer-hack'>
            <div className={styles.socialFeed}>
              {DATA.map((x, i) => this.renderSocialBlock(x, i))}
            </div>
            <div className={styles.newsLetter}>
              <h1>JOIN OUR NEWSLETTER</h1>
              <input type='text' placeholder='YOUR EMAIL ADDRESS' ref={subscribeForm => this.subscribeForm = subscribeForm} />
              <div style={{position: 'relative'}}>
                <div className={styles.joinUsButton} onClick={this.onClickSubscribe}>
                  JOIN US
                </div>
                <div className={styles.subscribeFormResponse} style={{opacity: this.state.subscribeSuccess ? 1 : 0}}>
                  {this.state.subscribeSuccess}
                </div>
              </div>
            </div>
            <div className={styles.siteMapContact}>
              <div className={styles.siteMap}>
                <h2>SITEMAP</h2>
                <div className={styles.siteMapBlock}>
                  <ul>
                    <li>KAAN SHOW</li>
                    <li className={styles.link}><a target='_blank' href='#INTRO-TO-KAAN'>INTRO TO KAAN</a></li>
                    <li className={styles.link}><a target='_blank' href='#KAAN-CLIPS'>KAAN CLIPS</a></li>
                    <li className={styles.link}><a target='_blank' href='#THE-STORY'>THE STORY</a></li>
                    <li className={styles.link}><a target='_blank' href='#WORLD-OF-KAAN'>WORLD OF KAAN</a></li>
                    <li className={styles.link}><a target='_blank' href='#KAAN-GALLERY'>KAAN GALLERY</a></li>
                    <li className={styles.link}><a target='_blank' href='#MAKING-THE-SHOW'>MAKING THE SHOW</a></li>
                  </ul>
                </div>
                <div className={styles.siteMapBlock}>
                  <ul>
                    <li>D'LUCK</li>
                    <li className={styles.link}><a target='_blank' href="https://d-luck.firebaseapp.com/#ABOUT-DLUCK">ABOUT D'LUCK</a></li>
                    <li className={styles.link}><a target='_blank' href="https://d-luck.firebaseapp.com/#GALLERY">GALLERY</a></li>
                    <li className={styles.link}><a target='_blank' href="https://d-luck.firebaseapp.com/#SEATING-PLAN">SEATING PLAN</a></li>
                    <li className={styles.link}><a target='_blank' href="https://d-luck.firebaseapp.com/#THEATER-360">THEATER 360º</a></li>
                    <li className={styles.link}><a target='_blank' href="https://d-luck.firebaseapp.com/#FACILITIES">FACILITIES</a></li>
                    <li className={styles.link}><a target='_blank' href="https://d-luck.firebaseapp.com/#LOCATION-MAP">LOCATION & MAP</a></li>
                  </ul>
                </div>
                <div className={styles.siteMapBlock}>
                  <ul>
                    <li>PANJALUCK</li>
                    <li className={styles.link}><a target='_blank' href='https://punjaluck-a28c1.firebaseapp.com/#business-page'>OUR BUSINESS</a></li>
                    <li className={styles.link}><a target='_blank' href='https://punjaluck-a28c1.firebaseapp.com/#vision-page'>VISION & MISSION</a></li>
                    <li className={styles.link}><a target='_blank' href='https://punjaluck-a28c1.firebaseapp.com/#corporate-page'>CORPORATE VALUE</a></li>
                    <li className={styles.link}><a target='_blank' href='https://punjaluck-a28c1.firebaseapp.com/#board-page'>BOARD PROFILE</a></li>
                    <li className={styles.link}><a target='_blank' href='https://punjaluck-a28c1.firebaseapp.com/#partner-page'>OUR PARTNER</a></li>
                    <li className={styles.link}><a target='_blank' href='https://punjaluck-a28c1.firebaseapp.com/#faq-page'>WORK WITH US</a></li>
                  </ul>
                </div>
                <div className={styles.siteMapBlock}>
                  <ul>
                    <li className={styles.link}>INFO & DOWNLOAD</li>
                    <li className={styles.link}>NEWS</li>
                    <li className={styles.link}><Link to='/info/download/' target="_blank">DOWNLOAD<br />(PHOTO, FACT SHEET, CLIPS)</Link></li>
                    <li className={styles.link}><Link to='/info/term/' target="_blank">TERMS & CONDITIONS</Link></li>
                    <li className={styles.link}><Link to='/info/disclaimer/' target="_blank">DISCLIMER</Link></li>
                    <li className={styles.link}><Link to='/info/privacy/' target="_blank">PRIVACY</Link></li>
                    <li className={styles.link}><Link to='/info/faq/' target="_blank">FAQ</Link></li>
                  </ul>
                </div>
                <div className={styles.siteMapBlock}>
                  <ul>
                    <li>BOOKING TICKET</li>
                    <li className={styles.link}><Link to='/ticket/type/' target='_blank'>PACKAGE & PROMOTION</Link></li>
                  </ul>
                </div>
              </div>
              <div className={styles.contact}>
                <h2>CONTACT</h2>
                <div className={styles.siteMapBlock} style={{width: '40%'}}>
                  <ul>
                    <li>CONTACT</li>
                    <li>
                      ADDRESS
                      <br />
                      <span style={{fontFamily: 'kanit', fontSize: '14px'}}>บริษัท ปัญลักษณ์ พาสุข จำกัด <br />เลขที่ 202 อาคาร เลอ คองคอร์ด <br />ห้อง 1601 ชั้น 16 ถ.รัชดาภิเษก <br />แขวงห้วยขวาง กรุงเทพฯ 10310</span>
                    </li>
                  </ul>
                </div>
                <div className={styles.siteMapBlock} style={{width: '30%'}}>
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
                <div className={styles.siteMapBlock} style={{width: '30%'}}>
                  <ul>
                    <li>EMAIL</li>
                    <li>
                      CONTACT@PANJALUCK.COM
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
          </div>
        </div>
        <div className={styles.footerBar}>
          <span>© 2017 PANJALUCK PASUK CO. , LTD. ALL RIGHTS RESERVED.</span>
          <span onClick={this.onClickToTop} style={{float: 'right', cursor: 'pointer'}}>TO THE TOP <img src={require('../assets/images/to_top.png')} style={{width: '15px'}} /></span>
        </div>
      </div>
    )
  }
})

export default Footer
