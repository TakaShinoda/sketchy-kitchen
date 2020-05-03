import React, { FC, useState } from 'react'
import { TopHeader } from '../components/topPage/TopHeader'
import { useHistory } from 'react-router-dom'
import pencil from '../assets/images/pencil.jpg'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${pencil})`,
      height: '100vh',
      backgroundSize: 'cover',
    },
    paper: {
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',
      top: '10%',
      width: '25%',
    }
  })
)

export const SearchMain: FC = () => {
  const classes = useStyle()
  const [keyword, setKeyword] = useState('')
  const history = useHistory()

  const handleSubmit = () => {
    history.push('/search/' + keyword)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  return (
    <div className={classes.background}>
      <TopHeader />
      <Paper className={classes.paper} component="form" onSubmit={handleSubmit}>
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
        <InputBase placeholder="キーワードを入力" onChange={handleChange} />
      </Paper>
    </div>
  )
}
