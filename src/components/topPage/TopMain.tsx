import React, { FC } from 'react'
import pencil from '../../assets/images/pencil.jpg'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(() => 
  createStyles({
    background: {
      backgroundImage: `url(${pencil})`,
      height: '100vh',
      backgroundSize: 'cover',
    },
  })
)

export const TopMain: FC = () => {
    const classes = useStyle()
    return(
        <div className={classes.background}>

        </div>
    )
}