import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { TileData } from '../../types/types'
import firebase from '../../firebase'

const useStyle = makeStyles(() =>
  createStyles({
    main: {
      textAlign: 'center',
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '90%',
      textAlign: 'center',
      marginTop: '2%',
    },
    image: {
      marginLeft: '1%',
      marginRight: '1%',
    },
    tileImage: {
      height: 'auto',
      width: '218px',
    },
    title: {
      fontWeight: 'bolder',
      fontSize: '20px',
    },
  })
)

export const AllRecipesList: FC = () => {
  const [data, setData] = useState<TileData[]>([])
  const classes = useStyle()
  const history = useHistory()

  const getAlltData = async () => {
    const db = firebase.firestore()
    const tileDataRef = db.collection('tileData')
    const snapShot = await tileDataRef.get()
    const temporaryData: object[] = []
    snapShot.docs.map((doc) => {
      temporaryData.push(doc.data())
    })
    setData(temporaryData as TileData[])
  }

  useEffect(() => {
    getAlltData()
  }, [])

  return (
    <div>
      <h1 className={classes.main}>全ての料理</h1>
      <div className={classes.root}>
        {data.map((tile, index) => (
          <div className={classes.image} key={index}>
            <Button
              aria-label="レシピの詳細をみる"
              onClick={() => history.push('/details/' + tile.title)}
            >
              <img
                className={classes.tileImage}
                src={tile.image}
                alt={tile.title}
              />
            </Button>
            <p className={classes.title}>{tile.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
