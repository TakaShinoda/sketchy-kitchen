import React, { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'

const useStyle = makeStyles(() =>
  createStyles({
    icon: {
      margin: '0 0 0 auto',
    },
    link: {
      textDecoration: 'none',
      color: '#1A2459',
    },
    bar: {
      backgroundColor: '#68a9cf',
    },
  })
)

export const TopHeader: FC = () => {
  const classes = useStyle()
  const history = useHistory()

  return (
    <>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent' }}
          >
            <h2 onClick={() => history.push('/')}>タイトル</h2>
          </Button>

          <div className={classes.icon}>
            <IconButton>
              <a
                className={classes.link}
                href="https://github.com/TakaShinoda/self-catering-recipes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}
