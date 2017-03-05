import React from 'react'
import SearchText from './SearchText'
import styles from './SearchInput.styl'
const SearchInput = React.createClass({
  getInitialState () {
    return {
      value: '',
      matches: []
    }
  },
  onChange (e) {
    this.findTargetFromSeach(this.input.value)
    this.setState({value: e.target.value})
  },
  onkeyPress (e) {
    if (e.which === 13 || e.keyCode === 13) {
      this.findTargetFromSeach(this.input.value)
      return false
    }
    return true
  },
  findTargetFromSeach (text) {
    const matches = []
    if (text.length >= 3) {
      for (let k in SearchText) {
        if (new RegExp(text).test(k.toLowerCase())) {
          if (typeof SearchText[k] === 'object') {
            matches.concat(k)
          } else {
            matches.push(k)
          }
        }
      }
      this.setState({matches: matches})
    } else {
      this.setState({matches: []})
    }
  },
  renderSuggesionBox () {
    return (
      <div className={styles.suggestionBox}>
        {this.state.matches.map(x => <div className={styles.option}>{x}</div>).slice(0, 5)}
      </div>
    )
  },
  render () {
    return (
      <span className={styles.container}>
        <input
          ref={x => this.input = x}
          className={styles.searchInput}
          onChange={(e) => this.onChange(e)}
          onKeyPress={e => this.onkeyPress(e)}
        />
        {this.renderSuggesionBox()}
      </span>
    )
  }
})

export default SearchInput
