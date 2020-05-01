import React, { FC } from 'react'
import pencil from '../../assets/images/pencil.jpg'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


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
                <IconButton type="submit">
                    <SearchIcon />
                </IconButton>
                <InputBase　placeholder="キーワードを入力" />
            </Paper>
        </div>
    )
}