import React from 'react'
import eve from '../assets/envelope.png'
import load from '../assets/loading.png'
import { Link } from 'react-router-dom'
const Errorpages = () => {
  return (
    <div className='bg-gray-900 '>
        <div className='md:flex flex-colomn justify-between max-sm:px-3 max-sm:py-3 px-8 py-20 h-max '>
        <div>
            <h2 className='text-9xl max-sm:text-6xl font-bold text-white'>4o4</h2>
            <p className='text-white'>Error: page not found. The requested URL was not found <br /> on this server</p>
            <div className=' container mx-auto p-5 space-y-5 mb-32 flex justify-center'>
            <Link to="/">
              <button className='bg-blue-400 max-sm:text-wrap px-7 py-2.5 text-black m-5 rounded-md max-sm:text-xs '>Go back</button>
              </Link>
              <Link to="/error">
                
                <button className='border-2 border-blue-400 px-7 py-2 max-sm:text-xs text-white rounded-md'>Reload</button>
                </Link>
            </div>
        </div>
        <div className='w-96 max-sm:w-56 max-sm:pb-' > 
          <img className='w-20 max-sm:w-10 ml-56 max-sm:ml-40' src={load} alt="" />
            <img className='' src={eve} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Errorpages