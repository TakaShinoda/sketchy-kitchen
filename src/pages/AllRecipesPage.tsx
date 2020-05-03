import React, { FC } from 'react'
import { TopHeader } from '../components/topPage/TopHeader'
import { AllRecipesList } from '../components/allRecipePage/AllRecipesList';


export const AllRecipesPage: FC = () => {
  return (
    <>
      <TopHeader />
      <AllRecipesList />
    </>
  )
}