import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import firebase from '../firebase'
import { TopHeader } from '../components/topPage/TopHeader'
import { TileData } from '../types/types'
import { makeStyles, createStyles } from '@material-ui/styles'

const useStyle = makeStyles(() =>
  createStyles({
    tileImage: {
      height: 'auto',
      width: '436px',
      margin: '1%',
    },
  })
)

export const DownloadPage: FC = () => {
  const { keyword } = useParams()
  const classes = useStyle()
  const [data, setData] = useState<TileData[]>([])

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

    setData(temporaryData as TileData[])
  }

  useEffect(() => {
    getData(keyword)
  }, [])

  const displayImage = () => {
    return (
      <div>
        {data.map((tile) => (
          <div>
            <img className={classes.tileImage} src={tile.image} alt={tile.title} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <TopHeader />
      {displayImage()}
    </>
  )
}
