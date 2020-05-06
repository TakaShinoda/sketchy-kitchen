import React, { FC, useState } from 'react'
import firebase from '../../firebase'
import { useForm } from 'react-hook-form'
import { makeStyles, createStyles } from '@material-ui/styles'
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
  const { register, handleSubmit } = useForm()
  const classes = useStyle()

  const onSubmit = (data: any) => {
    setTitle('')
    setFoodstuffs([])
    setProcedures([])
    console.log(data)
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

  // const removeProcedure = (index: number) => () => {
  //   setProcedures((prevprocedures) => [
  //     ...prevprocedures.filter((item) => item !== index),
  //   ])
  //   setProcedureCounter((prevProcedureCounter) => prevProcedureCounter - 1)
  //
  // }

  const clearProcedures = () => {
    setProcedures([])
    setProcedureCounter(0)
  }

  return (
    <>
      <h2>投稿</h2>
      <h3>写真</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>料理名</h3>
        <fieldset
              className={classes.form}
            >
        <input
          name="title"
          ref={register({ required: true })}
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
              <input
                type="text"
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
        <input type="submit" />
      </form>
    </>
  )
}
