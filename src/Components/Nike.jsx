import React, { useState } from 'react';
import airjordan from './images/airjordan.png';
import blackjordan from './images/image.png';
import { motion } from 'framer-motion';
import './Nike.css';
const Nike = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className='w-full relative top-36' style={{ backgroundColor: '#e6e7e5' }}>
      <div className='w-full px-20 text-gray-500 font-font1 text-[10vh] ml-24'>NIKE NEW ARRIVALS</div>
      <div className='relative px-20'>
        <div className='cards w-full flex flex-row gap-10 mt-10 items-center justify-center'>
          <div
            onMouseEnter={() => setHoveredCard('left')}
            onMouseLeave={() => setHoveredCard(null)}
            className='cardcontainer relative w-5/12 h-[75vh] bg-gray-300 rounded-xl shadow-xl flex flex-col items-center justify-center'
          >
            <div className='card h-2/3 w-1/2 rounded-xl overflow-hidden bg-gray-600'>
              <img className='w-full h-full bg-cover' src={airjordan} alt='Air Jordan' />
            </div>
            <div className='text-black mt-4 text-center'>
              <h2 className='text-4xl font-bold font-increase'>Air Jordan</h2>
              <p className='font-poppins text-xl font-increase'>Experience the legacy redefined with bold colorways and premium materials.</p>
            </div>
          </div>
          <div
            onMouseEnter={() => setHoveredCard('right')}
            onMouseLeave={() => setHoveredCard(null)}
            className='cardcontainer relative w-5/12 h-[75vh] bg-black rounded-xl shadow-xl flex flex-col items-center justify-center'
          >
            <div className='card h-2/3 w-1/2 rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src={blackjordan} alt='Black Jordan' />
            </div>
            <div className='text-white mt-4 text-center'>
              <h2 className='text-4xl font-bold font-increase'>Black Jordan</h2>
              <p className='font-poppins text-xl font-increase'>Elevate your style with the timeless elegance of Black Jordan sneakers.</p>
            </div>
          </div>
        </div>
        {hoveredCard && (
          <motion.h1
            className='absolute top-[calc(50%-7%)] left-[calc(50%-7%)] z-[9] text-custom-size leading-none tracking-tighter text-yellow-400'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
          >
            {hoveredCard === 'left'
              ? "DYNAMIC".split('').map((item, index) => (
                  <motion.span
                    key={index}
                    className='inline-block text-dynamic'
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  >
                    {item}
                  </motion.span>
                ))
              : "PREMIUM".split('').map((item, index) => (
                  <motion.span
                    key={index}
                    className='inline-block text-premium'
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  >
                    {item}
                  </motion.span>
                ))}
          </motion.h1>
        )}
      </div>
      <div className="drop drop-top" style={{ '--clr': '#3a9cf1' }}></div> {/* Top drop */}
      <div className="drop drop-bottom" style={{ '--clr': '#ff6347' }}></div> {/* Bottom drop */}
    </div>
  );
};

export default Nike;
