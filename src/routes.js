import { IndexRoute, Redirect, Route } from 'react-router'

import Admin from './admin/SocialFeedPage'
import DisclaimerPage from './info/disclaimer/disclaimerPage'
import DownloadPage from './info/download/DownloadPage'
import FaqCategoriesPage from './info/faq/FaqCategoriesPage'
import FaqListPage from './info/faq/FaqListPage'
import FaqPage from './info/faq/FaqPage'
import HomePage from '../src/home/HomePage'
import InfoPage from '../src/info/InfoPage'
import Layout from '../src/layouts/layout'
import PrivacyPage from './info/privacy/privacyPage'
import React from 'react'
import TermPage from './info/term/termPage'
import TicketForm from './ticket/TicketForm'
import TicketPage from './ticket/TicketPage'
import TicketShowAndStay from './ticket/TicketShowAndStay'
import TicketType from './ticket/TicketType'

export default (
  <div>
    {/* main pages */}
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path='admin' component={Admin} />
      <Route path='ticket' component={TicketPage}>
        <Route path='type' component={TicketType} />
        <Route path='form' component={TicketForm} />
        <Route path='showandstay' component={TicketShowAndStay} />
      </Route>
      <Redirect from="info" to="info/privacy" />
      <Route path='info' component={InfoPage}>
        <Route path='news' />
        <Route path='term' component={TermPage} />
        <Route path='disclaimer' component={DisclaimerPage} />
        <Route path='privacy' component={PrivacyPage} />
        <Route path='download' component={DownloadPage} />
        <Route path='faq' component={FaqPage}>
          <IndexRoute component={FaqCategoriesPage} />
          <Route path=':id' component={FaqListPage} />
        </Route>
      </Route>
    </Route>
  </div>
)
