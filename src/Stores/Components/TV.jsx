

import React from 'react'

import { tvData } from '../data/tv'

const TV = () => {
    const firstFiveImages = tvData.slice(0,5)
    
  return (
    <>
    <h2>TV</h2>
    <div className='proSection'>
        {
           firstFiveImages.map((item)=>{
               return(
                <div className='imgBox'>
                    <img className='proimage' src={item.image} alt="" />
                </div>
               )
            })
        }
      
    </div>
    </>
  )
}

export default TV