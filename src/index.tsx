import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then((axe) => {
    axe.default(React, ReactDOM, 1000)
    ReactDOM.render(<App />, document.getElementById('root'))
  })
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}
