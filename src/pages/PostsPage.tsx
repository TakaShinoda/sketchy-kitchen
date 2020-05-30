import React, { FC } from 'react'
import { TopHeader } from '../components/topPage/TopHeader'
import { PostRecipe } from '../components/postPage/PostRecipe'

export const PostsPage: FC = () => {
  return (
    <>
      <TopHeader />
      <main>
        <PostRecipe />
      </main>
    </>
  )
}
