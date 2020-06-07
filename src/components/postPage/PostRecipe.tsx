import React, { FC, useState, useEffect } from 'react'
import firebase from '../../firebase'
import { useForm } from 'react-hook-form'
import { makeStyles, createStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { useHistory } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog'
import Loader from 'react-loader-spinner'

const useStyle = makeStyles(() =>
  createStyles({
    main: {
      textAlign: 'center',
    },
    area: {
      marginTop: '50px',
    },
    form: {
      borderStyle: 'none',
    },
    cancel: {
      backgroundColor: '#c30019',
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
  const history = useHistory()
  const [spinner, setSpinner] = useState(false)

  const onSubmit = async (data: any) => {
    if (image === '') {
      alert('画像を選択してください')
    } else {
      setSpinner(true)
      const postIndex = Date.now().toString()
      const storageRef = firebase
        .storage()
        .ref('images')
        .child(`${postIndex}.jpg`)
      const snapshot = await storageRef.put(image)
      const progress =
        (await (snapshot.bytesTransferred / snapshot.totalBytes)) * 100
      console.log(`Upload is ${progress} % done`)

      // get download url
      const downloadURL = await storageRef.getDownloadURL()
      console.log('File available at', downloadURL)

      // upload firestore
      const db = firebase.firestore()
      db.collection('tileData').add({
        image: downloadURL,
        title: data.title,
        foodstuffs: data.foodstuffs,
        procedures: data.procedures,
        comment: data.comment,
        keywords: data.keywords,
      })

      // reset
      setImage('')
      setTitle('')
      clearFoodstuffs()
      clearProcedures()
      clearKeywords()
      setComment('')
      setSpinner(false)
      // ページ遷移する
      history.push('/all')
    }
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

  useEffect(() => {
    addFoodstuff()
    addProcedure()
    addKeyword()
  }, [])

  const dialog = () => {
    return (
      <>
        <Dialog open={spinner}>
          <Loader
            type="Oval"
            color="#68a9cf"
            height={100}
            width={100}
            visible={spinner}
          />
        </Dialog>
      </>
    )
  }

  return (
    <div className={classes.main}>
      {dialog()}
      <h1>投稿</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className={classes.area}>
          <label htmlFor="photo">
            <h2>写真</h2>
          </label>
          <TextField
            type="file"
            id="photo"
            onChange={(e: React.ChangeEvent<HTMLInputElement> | any) =>
              setImage(e.target.files[0])
            }
          />
        </div>

        <div className={classes.area}>
        <label htmlFor="title">
          <h2>料理名</h2>
        </label>
        <fieldset className={classes.form}>
          <TextField
            id="title"
            label="料理名"
            variant="outlined"
            name="title"
            inputRef={register({ required: true })}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>
        </div>
        
        <div className={classes.area}>
        <label htmlFor="foodstuff">
          <h2>材料</h2>
        </label>
        <Button
          aria-label="材料を追加する"
          variant="contained"
          color="primary"
          onClick={addFoodstuff}
        >
          Add
        </Button>
        &nbsp;&nbsp;
        <Button
          aria-label="材料を全て削除する"
          variant="contained"
          color="secondary"
          onClick={clearFoodstuffs}
          className={classes.cancel}
        >
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
                id="foodstuff"
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
        </div>

        <div className={classes.area}>
        <label htmlFor="procedure">
          <h2>手順</h2>
        </label>
        <Button
          aria-label="手順を追加する"
          variant="contained"
          color="primary"
          onClick={addProcedure}
        >
          Add
        </Button>
        &nbsp;&nbsp;
        <Button
          aria-label="手順を全て削除する"
          variant="contained"
          color="secondary"
          onClick={clearProcedures}
          className={classes.cancel}
        >
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
                id="procedure"
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
        </div>

        <div className={classes.area}>
        <label htmlFor="comment">
          <h2>コメント</h2>
        </label>
        <fieldset className={classes.form}>
          <TextField
            multiline
            rows="4"
            id="comment"
            label="感想を教えて"
            variant="outlined"
            name="comment"
            inputRef={register({ required: true })}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </fieldset>
        </div>
       
        <div className={classes.area}>
        <label htmlFor="keyword">
          <h2>タグ付</h2>
        </label>
        <p>本レシピのキーワードを設定してください</p>
        <Button
          aria-label="このレシピのキーワードを追加する"
          variant="contained"
          color="primary"
          onClick={addKeyword}
        >
          Add
        </Button>
        &nbsp;&nbsp;
        <Button
          aria-label="このレシピのキーワードを全て削除する"
          variant="contained"
          color="secondary"
          onClick={clearKeywords}
          className={classes.cancel}
        >
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
                id="keyword"
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
        </div>

        <div className={classes.area}>
        <h2>アップロード</h2>
        <Button
          aria-label="レシピをアップロードする"
          type="submit"
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
        </div>

      </form>
      <div className={classes.area} />
    </div>
  )
}
