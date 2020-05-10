import React, { FC, useState } from 'react'
import firebase from '../../firebase'
import { useForm } from 'react-hook-form'
import { makeStyles, createStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const useStyle = makeStyles(() =>
  createStyles({
    main: {
      textAlign: 'center',
    },
    form: {
      borderStyle: 'none',
    },
  })
)


export const PostRecipe: FC = () => {
  const [image, setImage] = useState<any>('')
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
      console.log(image)
   

    // url作成
    //const blobUrl = window.URL.createObjectURL(image)
    //console.log(blobUrl)
    
    // upload storage
    const storageRef = firebase.storage().ref('images').child(`${image.name}`)
    storageRef.put(image)
    

    // upload firestore
    // const db = firebase.firestore()
    // db.collection('tileData').add({
    //   title: data.title,
    //   foodstuffs: data.foodstuffs,
    //   procedures: data.procedures,
    //   comment: data.comment,
    //   keywords: data.keywords,
    // })

    setTitle('')
    clearFoodstuffs()
    clearProcedures()
    clearKeywords()
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
    setKeywords((prevkeywords): any => [...prevkeywords, keywordcounter])
    setKeywordCounter((prevKeywordCounter) => prevKeywordCounter + 1)
  }

  const clearKeywords = () => {
    setKeywords([])
    setKeywordCounter(0)
  }

  return (
    <div className={classes.main}>
      <h2>投稿</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>写真</h3>
        
        <TextField type="file" onChange={(e: React.ChangeEvent<HTMLInputElement>|any) => setImage(e.target.files[0])} />



        
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
        <h3>材料</h3>
        <Button variant="contained" color="primary" onClick={addFoodstuff}>
          Add
        </Button>
        &nbsp;&nbsp;
        <Button variant="contained" color="secondary" onClick={clearFoodstuffs}>
          Clear
        </Button>
        {foodstuffs.map((index) => {
          const foodstuffName = `foodstuffs[${index}]`
          return (
            <fieldset
              name={foodstuffName}
              key={foodstuffName}
              className={classes.form}
            >
              <TextField
                id="outlined-basic"
                label={`材料${index + 1}`}
                variant="outlined"
                name={foodstuffName}
                inputRef={register({ required: true })}
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
        <Button variant="contained" color="primary" onClick={addProcedure}>
          Add
        </Button>
        &nbsp;&nbsp;
        <Button variant="contained" color="secondary" onClick={clearProcedures}>
          Clear
        </Button>
        {procedures.map((index) => {
          const procedureList = `procedures[${index}]`
          return (
            <fieldset
              name={procedureList}
              key={procedureList}
              className={classes.form}
            >
              <TextField
                multiline
                rows="3"
                id="outlined-basic"
                label={`手順${index + 1}`}
                variant="outlined"
                name={procedureList}
                inputRef={register({ required: true })}
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
          <TextField
            multiline
            rows="4"
            id="outlined-basic"
            label="感想"
            variant="outlined"
            name="comment"
            inputRef={register({ required: true })}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </fieldset>
        <br />
        <h3>タグ付</h3>
        <p>本レシピのキーワードを設定してください</p>
        <Button variant="contained" color="primary" onClick={addKeyword}>
          Add
        </Button>
        &nbsp;&nbsp;
        <Button variant="contained" color="secondary" onClick={clearKeywords}>
          Clear
        </Button>
        {keywords.map((index) => {
          const keywordList = `keywords[${index}]`
          return (
            <fieldset
              name={keywordList}
              key={keywordList}
              className={classes.form}
            >
              <TextField
                id="outlined-basic"
                label={`タグ${index + 1}`}
                variant="outlined"
                name={keywordList}
                inputRef={register({ required: true })}
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
        <br />
        <h3>アップロード</h3>
        <Button
          type="submit"
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
      </form>
      <br />
      <br />
    </div>
  )
}
