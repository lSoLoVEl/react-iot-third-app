import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbariot() {
  return (
    <div className='flex justify-center gap-5 p-5 bg-blue-700 text-white'>
        <Link to="/"> หน้า A </Link>
        <Link to="/pageB"> หน้า B </Link>
        <Link to="/pageC"> หน้า C </Link>
        <Link to="/pageD"> หน้า D </Link>

    </div>
  )
}
 