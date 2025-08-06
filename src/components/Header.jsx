import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
    <h3 className='text-2xl'>Divyansh</h3>
    {/* <div className='flex gap-10'>
        <a className='text-xl underline' href='/'>Home</a>
        <a className='text-xl underline' href='/about'>About</a>
        <a className='text-xl underline' href='/contact'>Contact</a>
        <a className='text-xl underline' href='/product'>Product</a>
             

    </div> */}


    {/* for remove page Reload  */}
    <div className='flex gap-10 text-lg underline'>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/product'>Product</Link>
         <Link to='/contact'>Contact</Link>
    </div>
      
    </div>
  )
}

export default Header
