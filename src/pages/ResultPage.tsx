import React, { FC } from 'react'
import { TopHeader } from '../components/topPage/TopHeader'
import { ResultRecipeList } from '../components/resultPage/ResultRecipeList'

export const ResultPage: FC = () => {
  return (
    <>
      <TopHeader />
      <ResultRecipeList />
    </>
  )
}
