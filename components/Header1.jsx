import Image from 'next/image'
import React from 'react'
import Block from './Block'

const Header1 = () => {
  return (
    <div className='flex justify-between border-b-2 border-gray-300 items-center h-24 px-10'>
     <Image src={"/logo.png"}  alt='logo' width={200} height={200} className='w-20 h20'/>
     <div className=' h-full flex' >
     <Block title={"Become a member"} para={"additional 10% off on stays."}/>
     <Block title={"oyo for business"} para={"trusted by 5000 coporates."}/>
     <Block title={"list your property"} para={"start earning in 30 mins."}/>
     <Block title={"987654321"} para={"call us to book now"}/>
     <div className="flex items-center ">
     <Image src={"/demo.svg"} width={200} height={200} className='w-10 h-10 rounded-full mr-5 '/>
     <h3>Login/signup</h3>
     </div>
    

     </div>
    </div>
  )
}

export default Header1