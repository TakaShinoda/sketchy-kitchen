import React, { FC } from 'react'
import pencil from '../../assets/images/pencil.jpg'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';

const useStyle = makeStyles(() => 
  createStyles({
    background: {
      backgroundImage: `url(${pencil})`,
      height: '100vh',
      backgroundSize: 'cover',
    },
    paper: {
        position: 'relative',
        marginLeft: "auto",
        marginRight: "auto",
        top: "10%",
        width: "35%",
    }
  })
)

export const TopMain: FC = () => {
    const classes = useStyle()
    return(
        <div className={classes.background}>
            <Paper className={classes.paper}>
                こんにちは
            </Paper>
        </div>
    )
}