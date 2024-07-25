import React from 'react'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
const Hero = () => {
  return (
    <div className="container1">
    <Canvas className="canvas-container"
        camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }} >
      <Suspense fallback={null}>
        <OrbitControls />
      </Suspense>
      <ambientLight intensity={0.5} />
    </Canvas>
  </div>
  )
}

export default Hero
