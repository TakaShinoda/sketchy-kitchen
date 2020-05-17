import React from 'react'
import { TopPage } from './pages/TopPage'
import { Helmet } from 'react-helmet'

export const App = () => {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:description" content="test" />
      </Helmet>
      <TopPage />
    </div>
  )
}

