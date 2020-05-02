import React, { FC } from 'react'
import { TopHeader } from '../components/topPage/TopHeader'
import { TopMain } from '../components/topPage/TopMain'
import { ResultPage } from './ResultPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export const TopPage: FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <TopHeader />
            <TopMain />
          </Route>
          <Route path="/search/:keyword" exact>
            <ResultPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
