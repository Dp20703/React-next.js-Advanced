"use client"
import React, { useContext } from 'react'
import { MyContext } from '@/Helper/Context'
import Header from './Components/Header'
const page = () => {
  const user = useContext(MyContext)
  return (
    <>
      <Header />
      <div className='text-black'>{user}
      </div></>
  )
}

export default page