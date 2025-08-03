import React from 'react'
import NavPart2 from './NavPart2'


const Navbar = ()=>{

        return(
              <>
               <nav className='bg-emerald-950  flex py-4 px-10 items-center justify-between'>
                <h2 className='text-2xl'>Divyansh</h2>
                        <NavPart2/>
                </nav>
              </>  
        )
}

export default Navbar