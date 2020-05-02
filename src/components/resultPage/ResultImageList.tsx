import React, { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TileData } from '../../types/types'
import firebase from '../../firebase'

export const ResultImageList: FC = () => {
  const [data, setData] = useState<TileData[]>([])
  const { keyword } = useParams()

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
  <>
    {data.map((tile) => (
        <div>
            <img src={tile.image} alt={tile.title} />
        </div>
    ))}
  </>
  )
}
