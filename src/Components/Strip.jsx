import React from 'react'
import './strip.css'
import Marquee from 'react-fast-marquee'
const strip = () => {
  return (
    <div className='announcement'>
      <Marquee>
      <div className='announcemet-text text1'>
        <span>NIKE, Inc. is a team comprised</span>
        <span>of the Nike, Jordan and Converse</span>
      </div>
      <div className='announcemet-text text2'>
        <span>brands driven by a shared</span>
        <span>purpose to leave an enduring impact.</span>
      </div>
      
      </Marquee>
    </div>
  )
}

export default strip
