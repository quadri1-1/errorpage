import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-gray-900 h-96'>
        <h2 className='text-6xl text-white'>welcome home</h2>
        <Link to='/error'>
        <button className='border-2 border-blue-400 px-7 py-2 text-white rounded-md'>NEXT</button>
        </Link>
    </div>
  )
}

export default Home