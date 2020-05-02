import React, { FC } from 'react'
import { TopHeader } from '../components/topPage/TopHeader'
import { ResultImageList } from '../components/resultPage/ResultImageList'

export const ResultPage: FC = () => {
  return (
    <>
      <TopHeader />
      <ResultImageList />
    </>
  )
}
