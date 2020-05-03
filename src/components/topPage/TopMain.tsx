import React, { FC } from 'react'
import { TopHeader } from './TopHeader'
import { useHistory } from 'react-router-dom'

export const TopMain: FC = () => {
  const history = useHistory()

  return (
    <>
      <TopHeader />
      <h2>トップ</h2>
      <button onClick={() => history.push('/search')}>検索</button>
    </>
  )
}
