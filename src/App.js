import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html} from '@react-three/drei'




function Box(props) {
  const ref = useRef(Box)
  const [size] = useState(0.3)
  const [hidden, setVisible] = useState(false)
  const [hovered, hover] = useState(false)
  
  return (
    <mesh onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}  >
      
      <boxGeometry />
      <meshStandardMaterial
      
       color={
        hovered ? 'black' : 'black'} />
        
      <Html
      
        style={{
          transition: 'all 0.2s',
          opacity: hidden ? 0 : 1,
          
          transform: `scale(${hidden ? 0.5 : 1})`

        }}
        distanceFactor={1.5}
        position={[0, -0.06, 0.51]}
        transform
        occlude
        
        
        >
        <span class= "jota">JOTA</span>
        


      </Html>
      <Html
        style={{
          transition: 'all 0.2s',
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`
        }}
        distanceFactor={1.5}
        position={[0, 0, -0.51]}
        rotation= {[0, 3.15, 0]}
        transform
        occlude
        >
        <span className='me' > <p>hi, I'm a digital designer,</p> 

        <p>VAI TOMA N0 CU MANU</p>
        <p>VAI TOMA N0 CU MANU</p>
        <p>VAI TOMA N0 CU MANU</p>
        <p>VAI TOMA N0 CU MANU</p>
        <p>VAI TOMA N0 CU MANU</p>
        <p></p></span>


      </Html>

      <Html
        style={{
          transition: 'all 0.2s',
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`
        }}
        distanceFactor={1.5}
        position={[0.51, -0.06, 0]}
        rotation= {[0, 1.575, 0]}
        transform
        occlude
        >
        <span class= "works">WORK</span>


      </Html>
      <Html
        style={{
          transition: 'all 0.2s',
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`
        }}
        distanceFactor={1.5}
        position={[-0.51, -0.06, 0]}
        rotation= {[0, -1.575, 0]}
        transform
        occlude
        >
        <span class= "works">ABOUT</span>


      </Html>



    </mesh>
  )
}

export default function App() {
  return (
    <Canvas 
     
     orthographicdpr={[1, 2]} camera= {{ position: [2, 0, 4], zoom: 1, fov: 25 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -10]} />
      <Box />
      <boxGeometry/>
      <OrbitControls 
       enableZoom={false}
       enablePan={false} 
        />
</Canvas>

  )
}


