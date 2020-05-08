import React, { FC, useState } from 'react'
import firebase from '../../firebase'
import { useForm } from 'react-hook-form'
import { makeStyles, createStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField';

const useStyle = makeStyles(() =>
  createStyles({
    form: {
      borderStyle: 'none',
    },
  })
)

export const PostRecipe: FC = () => {
  const [title, setTitle] = useState('')
  const [foodstuffs, setFoodstuffs] = useState([])
  const [procedures, setProcedures] = useState([])
  const [foodstuffcounter, setFoodstuffCounter] = useState(0)
  const [procedurecounter, setProcedureCounter] = useState(0)
  const [comment, setComment] = useState('')
  const [keywords, setKeywords] = useState([])
  const [keywordcounter, setKeywordCounter] = useState(0)
  const { register, handleSubmit } = useForm()
  const classes = useStyle()

  const onSubmit = (data: any) => {
    console.log(data)
    setTitle('')
    setFoodstuffs([])
    setProcedures([])
    setKeywords([])
    setComment('')
  }

  const addFoodstuff = () => {
    setFoodstuffs((prevfoodstuffs): any => [
      ...prevfoodstuffs,
      foodstuffcounter,
    ])
    setFoodstuffCounter((prevFoodstuffCounter) => prevFoodstuffCounter + 1)
  }

  // const removeFoodstuff = (index: number) => () => {
  //   setFoodstuffs((prevfoodstuffs) => [
  //     ...prevfoodstuffs.filter((item) => item !== index),
  //   ])
  //   setFoodstuffCounter((prevFoodstuffCounter) => prevFoodstuffCounter - 1)
  // }

  const clearFoodstuffs = () => {
    setFoodstuffs([])
    setFoodstuffCounter(0)
  }

  const addProcedure = () => {
    setProcedures((prevprocedures): any => [
      ...prevprocedures,
      procedurecounter,
    ])
    setProcedureCounter((prevProcedureCounter) => prevProcedureCounter + 1)
  }

  const clearProcedures = () => {
    setProcedures([])
    setProcedureCounter(0)
  }

  const addKeyword = () => {
    setKeywords((prevkeywords): any => [
      ...prevkeywords,
      keywordcounter,
    ])
    setKeywordCounter((prevKeywordCounter) => prevKeywordCounter + 1)
  }

  const clearKeywords = () => {
    setKeywords([])
    setKeywordCounter(0)
  }

  return (
    <>
      <h2>投稿</h2>
      <h3>写真</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>料理名</h3>
        <fieldset className={classes.form}>
          <TextField
            id="outlined-basic"
            label="料理名"
            variant="outlined"
            name="title"
            inputRef={register({ required: true })}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>

        <h3>食材</h3>
        <button type="button" onClick={addFoodstuff}>
          Add
        </button>
        <button type="button" onClick={clearFoodstuffs}>
          Clear
        </button>
        {foodstuffs.map((index) => {
          const foodstuffName = `foodstuffs[${index}]`
          return (
            <fieldset
              name={foodstuffName}
              key={foodstuffName}
              className={classes.form}
            >
              <input
                type="text"
                name={foodstuffName}
                ref={register({ required: true })}
              />
              {/* 
              <button type="button" onClick={removeFoodstuff(index)}>
                Remove
              </button>
              */}
            </fieldset>
          )
        })}
        <br />
        <h3>手順</h3>
        <button type="button" onClick={addProcedure}>
          Add
        </button>
        <button type="button" onClick={clearProcedures}>
          Clear
        </button>
        {procedures.map((index) => {
          const procedureList = `procedures[${index}]`
          return (
            <fieldset
              name={procedureList}
              key={procedureList}
              className={classes.form}
            >
              <label>{index + 1}: </label>
              <textarea
                name={procedureList}
                ref={register({ required: true })}
              />
              {/* 
              <button type="button" onClick={removeProcedure(index)}>
                Remove
              </button>
              */}
            </fieldset>
          )
        })}
        <br />

        <h3>コメント</h3>
        <fieldset className={classes.form}>
          <textarea
            name="comment"
            ref={register({ required: true })}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </fieldset>

        <br />

        <h3>タグ付</h3>
        <p>本レシピのキーワードを設定してください</p>
        <button type="button" onClick={addKeyword}>
          Add
        </button>
        <button type="button" onClick={clearKeywords}>
          Clear
        </button>
        {keywords.map((index) => {
          const keywordList = `keywords[${index}]`
          return (
            <fieldset
              name={keywordList}
              key={keywordList}
              className={classes.form}
            >
              <label>{index + 1}: </label>
              <input
                type="text"
                name={keywordList}
                ref={register({ required: true })}
              />
              {/* 
              <button type="button" onClick={removeProcedure(index)}>
                Remove
              </button>
              */}
            </fieldset>
          )
        })}
        <br />
        <input type="submit" />
      </form>
    </>
  )
}
