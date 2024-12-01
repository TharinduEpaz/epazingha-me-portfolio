/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/Stool.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Stool(props) {
  const { nodes, materials } = useGLTF('models/Stool.glb')
  return (
    <group {...props} dispose={null} scale={[0.15,0.15,0.15]} position={[0.3,0.5,0.1]}>
      <mesh geometry={nodes.Node.geometry} material={materials.lambert2SG} />
    </group>
  )
}

useGLTF.preload('models/Stool.glb')