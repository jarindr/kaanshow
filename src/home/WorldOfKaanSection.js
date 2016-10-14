import React from 'react'

import styles from './WorldOfKaanSection.styl'
import Title from '../components/Title'
import WorldOfKaanModal from '../components/WorldOfKaanModal'

const Block = React.createClass({
  propTypes: {
    backgroundImage: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    subTitle: React.PropTypes.string
  },
  render () {
    return (
      <div className={styles.block}>
        <div className={styles.backgroundImageContainer}>
          <div className={styles.blockTitle}>
            {this.props.title}<br />
            <span>({this.props.subTitle})</span>
          </div>
          <img src={this.props.backgroundImage} />
        </div>
      </div>
    )
  }
})

const WorldOfKaanSection = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <Title text='WORLD OF KAAN' />
        <div className={styles.blocksContainer}>
          <Block title='เกาะแก้วพิสดาร' subTitle='พระอภัยมณี' backgroundImage={require('./assets/worldOfKaan/003.jpg')} />
          <Block title='เกาะแก้วพิสดาร' subTitle='พระอภัยมณี' backgroundImage={require('./assets/worldOfKaan/Ch02_001.jpg')} />
          <Block title='เกาะแก้วพิสดาร' subTitle='พระอภัยมณี' backgroundImage={require('./assets/worldOfKaan/Ch03_002.jpg')} />
          <Block title='เกาะแก้วพิสดาร' subTitle='พระอภัยมณี' backgroundImage={require('./assets/worldOfKaan/Ch06_002.jpg')} />
          <Block title='เกาะแก้วพิสดาร' subTitle='พระอภัยมณี' backgroundImage={require('./assets/worldOfKaan/Ch07_War.jpg')} />
          <Block title='เกาะแก้วพิสดาร' subTitle='พระอภัยมณี' backgroundImage={require('./assets/worldOfKaan/ch05_skyhigh_cloud_004_002.jpg')} />
        </div>
        <WorldOfKaanModal
          title='เกาะแก้วพิสดาร'
          subTitle='พระอภัยมณี'
          images={[require('./assets/worldOfKaan/Ch06_002.jpg')]}
        >
          asdasdasdadsasddadasdassadsadas asd asd ;asldj sl;d ajsdl ;asjd ;asjd l;sd jals;d jasd
          asdasdasdadsasddadasdassadsadas asd asd ;asldj sl;d ajsdl ;asjd ;asjd l;sd jals;d jasd
          asdasdasdadsasddadasdassadsadas asd asd ;asldj sl;d ajsdl ;asjd ;asjd l;sd jals;d jasd
          asdasdasdadsasddadasdassadsadas asd asd ;asldj sl;d ajsdl ;asjd ;asjd l;sd jals;d jasd
          asdasdasdadsasddadasdassadsadas asd asd ;asldj sl;d ajsdl ;asjd ;asjd l;sd jals;d jasd
          asdasdasdadsasddadasdassadsadas asd asd ;asldj sl;d ajsdl ;asjd ;asjd l;sd jals;d jasd
          asdasdasdadsasddadasdassadsadas asd asd ;asldj sl;d ajsdl ;asjd ;asjd l;sd jals;d jasd
          asdasdasdadsasddadasdassadsadas asd asd ;asldj sl;d ajsdl ;asjd ;asjd l;sd jals;d jasd
          asdasdasdadsasddadasdassadsadas asd asd ;asldj sl;d ajsdl ;asjd ;asjd l;sd jals;d jasd
        </WorldOfKaanModal>
      </div>
    )
  }
})

export default WorldOfKaanSection
