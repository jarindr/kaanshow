import React from 'react'
import styles from './SocialFeedPage.styl'

const BlockImage = (props) => {
  return (
    <div className={styles.blockImage} key={props.data.id}>
      <img src={props.data.images.standard_resolution.url} />
    </div>
  )
}
BlockImage.propTypes = {
  data: React.PropTypes.object
}

const SocailFeedPage = React.createClass({
  componentDidMount () {
    this.onFetchDataSocialFeed()
  },
  getInitialState () {
    return {
      data: []
    }
  },
  onFetchDataSocialFeed () {
    const token = '247039866.1677ed0.58bb16ac329047efb02f0568e6b14c3f'
    const numPhotos = 20
    $.ajax({
      url: 'https://api.instagram.com/v1/users/self/media/recent',
      dataType: 'jsonp',
      type: 'GET',
      data: { access_token: token, count: numPhotos },
      success: (data) => {
        this.setState({data: data.data})
      },
      error: (data) => {
        console.log(data)
      }
    })
  },
  renderBlockImage (data) {

  },
  render () {
    return (
      <div className={styles.container}>
        <button type='button' onClick={this.onFetchDataSocialFeed}>Fetch now</button>
        <div className={styles.blocksContainer}>
          {this.state.data.map(x => <BlockImage data={x} />)}
        </div>
      </div>
    )
  }
})

export default SocailFeedPage
