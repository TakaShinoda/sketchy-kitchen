import React, { FC } from 'react'
import { TopMain } from '../components/topPage/TopMain'
import { SearchMain } from './SearchMain'
import { DownloadPage } from '../pages/DownloadPage'
import { ResultPage } from './ResultPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export const TopPage: FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <TopMain />
          </Route>
          <Route exact path="/search">
            <SearchMain />
          </Route>
          <Route exact path="/search/:keyword">
            <ResultPage />
          </Route>
          <Route exact path="/download/:keyword">
            <DownloadPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
