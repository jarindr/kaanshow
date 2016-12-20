import React from 'react'
import styles from './TabChooser.styl'

const TabChooser = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },
  getInitialState () {
    return {
      current: 0
    }
  },
  renderTab (data, index) {
    return (
      <div className={styles.containerTab} onClick={this.onClickTab.bind(null, index)}>
        <div className={`${styles.tabTitle} ${this.state.current === index ? styles.activeTab : null}`}>
          <h1>{data.title}</h1>
        </div>
        <div
          className={`${styles.containerTabContent} ${this.state.current === index ? styles.activeContent : null}`}
          dangerouslySetInnerHTML={{ __html: data.content }}
        >
        </div>
      </div>
    )
  },
  onClickTab (index, e) {
    this.setState({current: index})
  },
  renderTabs () {
    return (
      this.props.data.map((x, i) => this.renderTab(x, i))
    )
  },
  render () {
    return (
      <div className={styles.container}>
        {this.renderTabs()}
      </div>
    )
  }
})

export default TabChooser
