import React, { FC } from 'react'
import { TopMain } from '../components/topPage/TopMain'
import { AllRecipesPage } from './AllRecipesPage'
import { SearchMain } from './SearchMain'
import { DetailsPage } from './DetailsPage'
import { ResultPage } from './ResultPage'
import { PostsPage } from './PostsPage'
import { NotFound } from './404'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import top from '../assets/images/top_image.jpg'

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${top})`,
      height: '100vh',
      backgroundSize: 'cover',
    }
  })
)

export const TopPage: FC = () => {
  const classes = useStyle()
  return (
    <div className={classes.background}>
      <Router>
        <Switch>
          <Route exact path="/">
            <TopMain />
          </Route>
          <Route exact path="/all">
            <AllRecipesPage />
          </Route>
          <Route exact path="/search">
            <SearchMain />
          </Route>
          <Route exact path="/search/:keyword">
            <ResultPage />
          </Route>
          <Route exact path="/details/:keyword">
            <DetailsPage />
          </Route>
          <Route exact path="/post">
            <PostsPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
