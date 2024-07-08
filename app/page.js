"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {

  const [users, setusers] = useState([])

  const getUsers = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    setusers(data)
    // console.log(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <button onClick={getUsers} className='text-white font-bold px-4 py-2 rounded bg-green-600'>Get Data</button>
      <div className='bg-slate-100 p-8 mt-5'>
        <ul>{users.map((e,id) => {
          return <li key={id} >{e.username} ---<Link href={`${e.id}`}>Explore</Link></li>
        })}</ul>
      </div>
    </>
  )
}

export default page