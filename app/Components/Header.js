import React, { useContext } from 'react'
import { MyContext } from '@/Helper/Context'
const Header = () => {
    const username=useContext(MyContext)
  return (
    <div><h1>The name of this webiste is {username}</h1></div>
  )
}

export default Header