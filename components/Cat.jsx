import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

export function Cat(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene-transformed.glb')
  const { actions } = useAnimations(animations, group)

  // set animation to play once and stop when done
  useEffect(() => {
    actions[animations[0].name].setLoop(THREE.LoopOnce, 0);
    actions[animations[0].name].clampWhenFinished = true;
  }, [actions, animations]);

  // run animation on click
  const handleClick = () => {
    actions[animations[0].name].reset().play();
  };

  return (
    <group ref={group} {...props} dispose={null} onClick={handleClick} scale={0.08} position={[0, -1, 0]} rotation={[0, -0.6, 0]}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Material_81} skeleton={nodes.Object_12.skeleton} />
        <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Material_81} skeleton={nodes.Object_14.skeleton} />
        <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.Material_93} skeleton={nodes.Object_16.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')

