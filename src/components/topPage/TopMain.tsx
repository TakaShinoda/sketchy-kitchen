import React, { FC } from 'react'
import { TopHeader } from './TopHeader'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      textAlign: 'center',
    },
    button: {
      margin: theme.spacing(1),
    },
  })
)

export const TopMain: FC = () => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <>
      <TopHeader />
      <div className={classes.main}>
        <h2>トップ</h2>
        <Button
          size="large"
          variant="contained"
          color="default"
          className={classes.button}
          onClick={() => history.push('/search')}
        >
          キーワードで探す
        </Button>

        <Button
          size="large"
          variant="contained"
          color="default"
          className={classes.button}
          onClick={() => history.push('/all')}
        >
          全て見る
        </Button>


        <Button
          size="large"
          variant="contained"
          color="default"
          className={classes.button}
        >
          投稿する
        </Button>
      </div>
    </>
  )
}
