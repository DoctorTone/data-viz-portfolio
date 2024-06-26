/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\question.gltf -T 
Files: .\question.gltf [44.23KB] > C:\Users\tony\Documents\Github\drt_software_website\public\models\question-transformed.glb [3.01KB] (93%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

export function Question(props) {
  const { nodes } = useGLTF('./models/question.glb')
  return (
    <group rotation-y={-Math.PI/2} scale={2} {...props} dispose={null}>
      <mesh geometry={nodes.Question.geometry} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <meshStandardMaterial color={0xcc7306} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/question.glb')
