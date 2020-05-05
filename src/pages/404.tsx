import React, { FC } from 'react'
import { TopHeader } from '../components/topPage/TopHeader'
import syokuji from '../assets/images/syokuji.png'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(() =>
  createStyles({
    main: {
      textAlign: 'center',
    },
    messageTitle: {
        fontSize: '80px'
    },
    notFoundImage: {
      height: 'auto',
      width: '30%',
    },
  })
)

export const NotFound: FC = () => {
  const classes = useStyle()
  return (
    <div className={classes.main}>
      <TopHeader />
      <h1 className={classes.messageTitle}>404</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <img className={classes.notFoundImage} src={syokuji} alt="syokuji" />
    </div>
  )
}
