import React from 'react'
import ReactSwipe from 'react-swipe'
import cx from 'classnames'
import styles from './SingleSliderResponsive.styl'
const SingleSliderResponsive = React.createClass({
  propTypes: {
    data: React.PropTypes.node
  },
  getInitialState () {
    return {
      current: 0,
      shiftTime: 0
    }
  },
  getCircleStyle (i) {
    const radius = 10
    const styleObject = { width: `${radius}px`, height: `${radius}px` }
    Object.assign(styleObject, {
      transform: `translateX(-${(radius + 8) * this.state.shiftTime}px)`
    })
    return styleObject
  },
  renderPagination () {
    let circles = this.props.data.map((x, i) => {
      const circleClassName = cx([styles.circle], {
        [styles.active]: this.state.current === i
      })
      return (
        <div
          className={circleClassName}
          style={this.getCircleStyle(i)}
          key={i}
        >
        </div>
      )
    })
    return (
      <div
        className={styles.circleContainer}
        style={{
          width: '110px',
          overflow: 'hidden'
        }}
      >
        {circles}
      </div>
    )
  },
  onSwipe (index) {
    if (index < this.state.current) {
      this.setState({current: index}, () => {
        if (this.state.current > 0 && this.state.current + 4 < this.props.data.length && !(this.state.shiftTime - 1 < 0)) {
          this.setState({shiftTime: this.state.shiftTime - 1})
        }
      })
    } else {
      this.setState({current: index}, () => {
        if (this.state.current > 3 && 2 + this.state.current < this.props.data.length && !(this.state.shiftTime + 1 > this.props.data.length)) {
          this.setState({shiftTime: this.state.shiftTime + 1})
        }
      })
    }
  },
  render () {
    return (
      <div>
        <ReactSwipe
          className={styles.container}
          swipeOptions={{continuous: false, callback: this.onSwipe}}
          key={this.props.data.length}
          >
          {this.props.data}
        </ReactSwipe>
        {this.renderPagination()}
      </div>
    )
  }
})

export default SingleSliderResponsive
