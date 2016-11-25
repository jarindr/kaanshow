import { IndexRoute, Redirect, Route } from 'react-router'

import DisclaimerPage from './info/disclaimer/disclaimerPage'
import FaqPage from './info/faq/FaqPage'
import HomePage from '../src/home/HomePage'
import InfoPage from '../src/info/InfoPage'
import Layout from '../src/layouts/layout'
import PrivacyPage from './info/privacy/privacyPage'
import React from 'react'
import TermPage from './info/term/termPage'

export default (
  <div>
    {/* main pages */}
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage} />
      <Redirect from="info" to="info/privacy" />
      <Route path='info' component={InfoPage}>
        <Route path='news' />
        <Route path='download' />
        <Route path='term' component={TermPage} />
        <Route path='disclaimer' component={DisclaimerPage} />
        <Route path='privacy' component={PrivacyPage} />
        <Route path='faq' component={FaqPage} />
      </Route>
    </Route>
  </div>
)
