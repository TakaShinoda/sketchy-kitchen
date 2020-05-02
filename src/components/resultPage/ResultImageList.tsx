import React, { FC, useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { TileData } from '../../types/types'
import firebase from '../../firebase'

const useStyle = makeStyles(() =>
  createStyles({
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

export const ResultImageList: FC = () => {
  const [data, setData] = useState<TileData[]>([])
  const { keyword } = useParams()
  const classes = useStyle()
  const history = useHistory()

  // 1,データを取得し配列に格納する関数を作る(非同期)
  const getData = async (searchWord: string | undefined) => {
    const db = firebase.firestore()
    const tileDataRef = db.collection('tileData')
    const searchedData = tileDataRef.where(
      'keyword',
      'array-contains',
      searchWord
    )
    const snapShot = await searchedData.get()
    const temporaryData: object[] = []
    snapShot.docs.map((doc) => {
      temporaryData.push(doc.data())
    })
    // object型からTitDataの配列型に変換
    setData(temporaryData as TileData[])
  }

  // 2,関数を呼び出す
  useEffect(() => {
    getData(keyword)
  }, [])

  // 3,データが格納された配列を表示する
  return (
    <div className={classes.root}>
      {data.map((tile) => (
        <div className={classes.image}>
          <Button onClick={() => history.push('/download/' + tile.title)}>
            <img className={classes.tileImage} src={tile.image} alt={tile.title} />
          </Button>
          <h3>{tile.title}</h3>
        </div>
      ))}
    </div>
  )
}
