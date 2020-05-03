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
      width: '80%',
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
  })
)

export const AllImagesList: FC = () => {
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
      <h2 className={classes.main}>全ての写真</h2>
      <div className={classes.root}>
        {data.map((tile) => (
          <div className={classes.image}>
            <Button onClick={() => history.push('/download/' + tile.title)}>
              <img
                className={classes.tileImage}
                src={tile.image}
                alt={tile.title}
              />
            </Button>
            <h3>{tile.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
