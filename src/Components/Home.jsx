import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, Text, Html } from '@react-three/drei';
import Nikeshoes from '../Models/Nikeshoes';
import './Home.css';
import customFont from './LilitaOne-Regular.ttf'
import font from './Anton-Regular.ttf'
const Home = () => {
  return (
    <div>
      <section className="container1">
        <Canvas
          className="canvas-container"
          camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }} // Adjusted camera position
        >
          <Suspense fallback={<Loader />}>
            <directionalLight intensity={1} position={[10, 10, 10]} />
            <ambientLight intensity={0.5} />
            <pointLight intensity={1} position={[10, 10, 10]} />
            <spotLight intensity={1} position={[10, 10, 10]} angle={0.3} penumbra={1} />
            <hemisphereLight intensity={0.5} />
            <Text
              position={[0, 0, 0]}
              fontSize={2}
              color="black"
              anchorX="center"
              anchorY="120%"
              rotation={[0, 0, 0]}
              maxWidth={20}
              material-opacity={1}
              className="font-font1"
              font={font}
            >
              NIKE
            </Text>
            <Text
              position={[0, 0, -2]} // Position behind the shoes
              fontSize={3.8} // Increased font size to cover the horizontal screen
              color="white"
              anchorX="center"
              anchorY="middle"
              rotation={[0, 0, 0]}
              maxWidth={20}
              material-opacity={1}
              font={customFont}
            >
              JUST  DO  IT
            </Text>
            <Nikeshoes />
          </Suspense>
        </Canvas>
      </section>
      <div className="container">
        <div className="drop" style={{ '--clr': '#db4ef4' }}></div>
        <div className="drop" style={{ '--clr': '#3a9cf1' }}></div>
      </div>
    </div>
  );
};

export default Home;
