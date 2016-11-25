import React from 'react'
import TabChooser from '../../components/TabChooser'
import data from './faqData'
import { withRouter } from 'react-router'
const FaqPage = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    params: React.PropTypes.object
  },
  renderTabChooser () {
    return (
      <TabChooser data={data[this.props.params.id].content} />
    )
  },
  render () {
    return this.renderTabChooser()
  }
})

export default withRouter(FaqPage)
