import React from 'react'
import Slider from 'react-slick'
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
  preventScrolling (e) {
    e.preventDefault()
    e.stopPropagation()
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
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div>
        <Slider {...settings}
          className={styles.container}
          afterChange={this.onSwipe}
          arrows={false}
          >
          {this.props.data}
        </Slider>
        {this.renderPagination()}
      </div>
    )
  }
})

export default SingleSliderResponsive
