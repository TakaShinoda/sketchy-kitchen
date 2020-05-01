import React, { FC } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

export const TopHeader: FC = () => {
  return (
    <>
      <AppBar>
          <Toolbar>
              <h2>タイトル</h2>
          </Toolbar>
      </AppBar>
    </>
  )
}
