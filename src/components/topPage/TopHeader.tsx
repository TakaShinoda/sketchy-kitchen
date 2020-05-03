import React, { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyle = makeStyles(() =>
  createStyles({
    icon: {
      margin: '0 0 0 auto',
    },
    link: {
      textDecoration: 'none',
      color: '#1A2459'
    }
  })
)

export const TopHeader: FC = () => {
  const classes = useStyle()


  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <h2>タイトル</h2>
          <div className={classes.icon}>
            <IconButton>
              <a className={classes.link} href="https://github.com/TakaShinoda" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}
