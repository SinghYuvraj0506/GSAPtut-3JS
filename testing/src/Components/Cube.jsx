import React, { useRef } from 'react'

import {PerspectiveCamera, RenderTexture, Text} from "@react-three/drei"
import { useFrame } from '@react-three/fiber'


function Cube() {
    const textRef = useRef()
    
    // Used for animation in canvas
    useFrame(state => {textRef.current.position.x = Math.sin(state.clock.elapsedTime)})

  return (
    <mesh>
          <boxGeometry args={[2,2,2]}/>
          <meshStandardMaterial color="red">
            <RenderTexture attach="map">
              <PerspectiveCamera makeDefault position={[0,0,2]}/>
              <color attach="background" args={["yellow"]}/>
              <Text ref={textRef} fontSize={1} color="black">
                Yuvraj
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
  )
}

export default Cube