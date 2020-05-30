import React, { FC } from 'react'
import { TopHeader } from './TopHeader'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import top from '../../assets/images/top_image.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      backgroundImage: `url(${top})`,
      height: '100vh',
      backgroundSize: 'cover',
    },
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
    <div className={classes.background}>
      <TopHeader />
      <main>
        <div className={classes.main}>
          <h1>Menu</h1>
          <Button
            aria-label="キーワードで検索"
            size="large"
            variant="contained"
            color="default"
            className={classes.button}
            onClick={() => history.push('/search')}
          >
            キーワードで探す
          </Button>

          <Button
            aria-label="全てのレシピをみる"
            size="large"
            variant="contained"
            color="default"
            className={classes.button}
            onClick={() => history.push('/all')}
          >
            全て見る
          </Button>

          <Button
            aria-label="レシピを投稿する"
            size="large"
            variant="contained"
            color="default"
            className={classes.button}
            onClick={() => history.push('/post')}
          >
            投稿する
          </Button>
        </div>
      </main>
    </div>
  )
}
