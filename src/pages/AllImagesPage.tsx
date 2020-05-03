import React, { FC } from 'react'
import { TopHeader } from '../components/topPage/TopHeader'
import { AllImagesList } from '../components/allImagePage/AllImagesList';


export const AllImagesPage: FC = () => {
  return (
    <>
      <TopHeader />
      <AllImagesList />
    </>
  )
}