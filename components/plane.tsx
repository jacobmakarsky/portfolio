import * as THREE from 'three';
import React, { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { usePlane, useBox } from '@react-three/cannon';
import niceColors from 'nice-color-palettes';

function Plane(props: any) {
    const [ref] = usePlane(() => ({ mass: 0, ...props }));
    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[5, 5]} />
            <shadowMaterial attach="material" color="#171717" opacity={0.5} />
        </mesh>
    );
}

interface CubesProps {
    number: number;
}

function Cubes({ number }: CubesProps) {
    const [ref, api] = useBox(() => ({
        mass: 1,
        args: [0.1, 0.1, 0.1],
        position: [Math.random() - 0.5, Math.random() * 2, Math.random() - 0.5]
    }));

    const colors = useMemo(() => {
        const array = new Float32Array(number * 3);
        const color = new THREE.Color();
        for (let i = 0; i < number; i++)
            color
                .set(niceColors[Math.floor(Math.random() * niceColors.length)][Math.floor(Math.random() * 5)])
                .convertSRGBToLinear()
                .toArray(array, i * 3);
        return array;
    }, [number]);

    const [lastSpawnedCube, setLastSpawnedCube] = useState(0);
    const frameCount = useRef(0);

    useFrame(() => {
        frameCount.current++;
        if (frameCount.current % 60 === 0) {  // Change the spawning rate here. Currently set to spawn a new cube every 60 frames.
            api.at(lastSpawnedCube).position.set(0, Math.random() * 0.5, 0);
            setLastSpawnedCube((lastSpawnedCube + 1) % number);
        }
    });

    return (
        <instancedMesh receiveShadow castShadow ref={ref} args={[null, null, number]}>
            <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]}>
                <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colors, 3]} />
            </boxBufferGeometry>
            <meshLambertMaterial attach="material" vertexColors={THREE.VertexColors} />
        </instancedMesh>
    );
}


export {
    Plane,
    Cubes,
};
