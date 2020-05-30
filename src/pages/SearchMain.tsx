import React, { FC, useState } from 'react'
import { TopHeader } from '../components/topPage/TopHeader'
import { useHistory } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'

const useStyle = makeStyles(() =>
  createStyles({
    main: {
      textAlign: 'center',
      marginTop: '3%',
    },
    paper: {
      position: 'relative',
      marginTop: '50px',
      marginLeft: 'auto',
      marginRight: 'auto',
      top: '10%',
      width: '350px',
    },
    input: {
      width: '280px'
    },
    message: {
      textAlign: 'center',
    },
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
    <div>
      <TopHeader />
      <main>
        <label htmlFor="search"><h1 className={classes.main}>キーワード検索</h1></label>
        <Paper  className={classes.paper} component="form" onSubmit={handleSubmit}>
          <IconButton type="submit" aria-label='検索する'>
            <SearchIcon />
          </IconButton>
          <InputBase className={classes.input} placeholder="キーワードを入力" onChange={handleChange} autoFocus={true} id="search"/>
        </Paper>
        <p className={classes.message}>投稿時のタグ付を元に検索します</p>
        <p className={classes.message}>おすすめキーワードは「肉」です</p>
      </main>
    </div>
  )
}
