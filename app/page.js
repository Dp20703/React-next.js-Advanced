import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
    <h1 className='text-2xl font-bold '>This is a Home Page.</h1>
    <Link href='/Contact'>Contact</Link>
    </>
  )
}

export default page