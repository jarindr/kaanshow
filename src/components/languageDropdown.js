import React from 'react'
import cx from 'classnames'
import enhanceWithClickOutside from 'react-click-outside'
import styles from './languageDropdown.styl'
const SelectableDropDown = React.createClass({
  propTypes: {
    selectOptions: React.PropTypes.array,
    onChange: React.PropTypes.func,
    name: React.PropTypes.string,
    selectIndex: React.PropTypes.number,
    className: React.PropTypes.string,
    optionClassName: React.PropTypes.string,
    optionsContainerClassName: React.PropTypes.string,
    selectClassName: React.PropTypes.string
  },
  getInitialState () {
    return {
      active: false
    }
  },
  handleClickOutside () {
    this.setState({ active: false })
  },
  onClickOption (i) {
    this.props.onChange(i)
  },
  renderOption (data, index) {
    const optionClassName = cx(styles.option, {
      [this.props.optionClassName]: this.props.optionClassName,
      [styles.active]: index === this.props.selectIndex
    })
    return (
      <div className={optionClassName} onClick={this.onClickOption.bind(null, index)} key={index}>
        {data}
      </div>
    )
  },
  renderOptions () {
    const optionsContainerClassName = cx(styles.optionsContainer, {
      [styles.active]: this.state.active,
      [this.props.optionsContainerClassName]: this.props.optionsContainerClassName
    })
    return (
      <div className={optionsContainerClassName}>
        {this.props.selectOptions.map((x, i) => this.renderOption(x, i))}
      </div>
    )
  },
  onToggleSelect () {
    this.setState({ active: !this.state.active })
  },
  render () {
    const selectClassName = cx(styles.select, {
      [this.props.selectClassName]: this.props.selectClassName
    })
    const containerClassName = cx(styles.container, {
      [this.props.className]: this.props.className
    })
    const deg = this.state.active ? 180 : 0
    return (
      <div className={containerClassName} onClick={this.onToggleSelect}>
        {this.props.name ? <label className={styles.title}>{this.props.name}</label> : null}
        <div className={selectClassName}>
          <span>{this.props.selectOptions[this.props.selectIndex]} </span>
          <img src={require('../assets/images/arrowlang.png')} className={styles.chevron} style={{transform: `rotate(${deg}deg)`}} />
          {this.renderOptions()}
        </div>
      </div>
    )
  }
})

export default enhanceWithClickOutside(SelectableDropDown)
