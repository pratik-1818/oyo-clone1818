
import React from 'react'

const Header3 = () => {
  return (
    <div className='bg-gradient-to-r  from-red-600 to-red-400 h-60 '>
        <div className='mx-10 p-5'>
          <h2 className='text-4xl text-center font-bold'>
            over 157,000 hotels and homes across 35 contries
          </h2>
          <div className="grid grid-cols-12 my-5 ">
            <input type="text"  placeholder='search..' className='h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2 '/>
            <input type="text"  placeholder='search..' className='h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2 '/>
            <input type="text"  placeholder='search..' className='h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2 '/>
            <button type='submit' className='h-16 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white teaxt-xl' >search</button>
          </div>
          <diV className="flex mx-20 my-5 bold-font ">
          <button type='submit' className='h-16 px-3 py-2 col-span-1 hover:cursor-pointer text-white border-2 border-white teaxt-xl mr-5' >continue to search</button>
          <button type='submit' className='h-16 px-3 py-2 col-span-1 hover:cursor-pointer text-white border-2 hovert:bg-slate-100 border-white teaxt-xl mr-5' >stay in india hotels</button>
          </diV>
        </div>
        </div>
  )
}

export default Header3