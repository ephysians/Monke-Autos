"use client";

import React from 'react'
import CustomButton from '../CustomButton'
import Image from 'next/image';



const Heros = () => {
  const handleScroll = () => { };

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
  <h1 className='hero__title'>
  Premium SUVs, Expert Care, Unmatched Service!
</h1>

<p className='hero__subtitle'>
  Luxury sales, repairs, and maintenance made simple.
</p>

        <CustomButton
  title="Explore Cars"
  containerStyles="bg-primary-blue text-white rounded-lg mt-6 Shadow-black"
  handleClick={handleScroll}
/>

      </div>
<div className='hero__image-container'>
  <div className='hero__image'>
    <Image src="/hero.png" 
     alt='hero' 
     fill className='object-contain' 
     />

    <div  className=" hero__image-overlay"/>
  </div>
  

</div>
    </div>
  )
}

export default Heros
