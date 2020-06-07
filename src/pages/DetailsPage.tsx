import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import firebase from '../firebase'
import { TopHeader } from '../components/topPage/TopHeader'
import { TileData } from '../types/types'
import { makeStyles, createStyles } from '@material-ui/styles'

const useStyle = makeStyles(() =>
  createStyles({
    main: {
      textAlign: 'center',
      marginTop: '3%',
    },
    tileImage: {
      height: 'auto',
      width: '327px',
    },
    area: {
      marginTop: '50px',
    },
    hr: {
      backgroundColor: '#eee',
      height: '1px',
      border: 'none',
    },
    under: {
      borderBottom: 'solid 3px #d3d3d3',
    },
  })
)

export const DetailsPage: FC = () => {
  const { keyword } = useParams()
  const classes = useStyle()
  const [data, setData] = useState<TileData[]>([])

  const getData = async (searchWord: string | undefined) => {
    const db = firebase.firestore()
    const tileDataRef = db.collection('tileData')
    const searchedData = tileDataRef.where('title', '==', searchWord)
    const snapShot = await searchedData.get()
    const temporaryData: object[] = []
    snapShot.docs.map((doc) => {
      temporaryData.push(doc.data())
    })

    setData(temporaryData as TileData[])
  }

  useEffect(() => {
    console.log(`searchWordは: ${keyword}`)
    getData(keyword) // tile.title
  }, [])

  const displayRecipe = () => {
    return (
      <div>
        {data.map((tile, index) => (
          <div key={index}>
            {index ? <div>こちらもおすすめ！</div> : <></>}
            <img
              className={classes.tileImage}
              src={tile.image}
              alt={tile.title}
            />
            <h2>{tile.title}</h2>

            <h3>
              <span className={classes.under}>材料</span>
            </h3>
            <div>
              {tile.foodstuffs.map((foodstuff, index) => (
                <div key={index}>{foodstuff}</div>
              ))}
            </div>

            <h3>
              <span className={classes.under}>手順</span>
            </h3>
            <div>
              {tile.procedures.map((procedure, index) => (
                <div key={index}>
                  {`${index + 1}`}, {procedure}
                </div>
              ))}
            </div>

            <h3>
              <span className={classes.under}>コメント</span>
            </h3>
            <div>{tile.comment}</div>
            <div className={classes.area} />
            <hr className={classes.hr} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <TopHeader />
      <main>
        <div className={classes.main}>{displayRecipe()}</div>
      </main>
    </>
  )
}
