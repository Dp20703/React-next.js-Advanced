"use client"
import React, { useState } from 'react'

const page = () => {
  const [username, setusername] = useState("")
  return (
    <>
      <h1 className='text-2xl mb-5'>Enter your name:</h1>
      <form>
        <input type="text" className='border-2 border-zinc-800 text-xl px-4 py-2 ' onChange={(e) => {
          setusername(e.target.value)
          // console.log(e.target.value)
        }} />
      </form>
    </>
  )
}

export default page