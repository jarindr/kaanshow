import React from 'react'
import data from './faqData'
import styles from './FaqCategoriesPage.styl'
import { withRouter } from 'react-router'
const FaqCategoriesPage = React.createClass({
  propTypes: {
    router: React.PropTypes.object,
    data: React.PropTypes.array
  },
  onClickCategory (index, e) {
    this.props.router.push(`/info/faq/${index}`)
  },
  renderCategory (data, index) {
    return (
      <div className={styles.category} onClick={this.onClickCategory.bind(null, index)}>{data.title}</div>
    )
  },
  renderCategories () {
    return (
      <div className={styles.categoriesContainer}>
        {data.map((x, i) => this.renderCategory(x, i))}
      </div>
    )
  },
  render () {
    return (
      <div>
        {this.renderCategories()}
      </div>
    )
  }
})

export default withRouter(FaqCategoriesPage)
