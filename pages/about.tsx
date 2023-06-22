import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Layout from '../components/layout';
import palette from 'nice-color-palettes';
import THREE from 'three';
import Head from 'next/head';
import Image from 'next/image';

type CubeProps = {
    index: number;
};

type CubesProps = {
    number: number;
};

const Cube = ({ index }: CubeProps) => {
    const speed = 0.1;
    const ref = useRef<THREE.Mesh | null>(null);

    // Choose a color for this cube.
    const randomPalette = palette[Math.floor(Math.random() * palette.length)];
    const initialColor = randomPalette[Math.floor(Math.random() * randomPalette.length)];

    useFrame(() => {
        if (ref.current) {
            if (ref.current.position.y > -20) {
                ref.current.position.y -= speed;
            } else {
                ref.current.position.y = 20 + Math.random() * 5;
                ref.current.position.x = -5 + Math.random() * 10;
                ref.current.position.z = -5 + Math.random() * 10;

                // Randomly change the color of the cube
                const randomPalette = palette[Math.floor(Math.random() * palette.length)];
                const randomColor = randomPalette[Math.floor(Math.random() * randomPalette.length)];
                (ref.current.material as THREE.MeshStandardMaterial).color.set(randomColor);
            }
        }
    });

    return (
        <Box
            key={index}
            castShadow
            receiveShadow
            position={[-5 + Math.random() * 10, 20 + index, -5 + Math.random() * 10]}
            ref={ref}
        >
            <meshStandardMaterial attach="material" color={initialColor} />
        </Box>
    );
};

const Cubes = ({ number }: CubesProps) => {
    const cubes = [...Array(number)].map((_, i) => <Cube index={i} key={i} />);

    return <>{cubes}</>;
};

export default function About() {
    return (
        <>
            <Head>
                <title>About Jacob Makarsky - Software Developer</title>
                <meta name="description" content="About Jacob Makarsky, Software Developer focusing on blockchain and disruptive technology." />
            </Head>

            <Layout>
                <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <Canvas className="w-full h-full">
                            <ambientLight />
                            <pointLight position={[10, 10, 10]} />
                            <Cubes number={20} />
                        </Canvas>
                    </div>

                    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-8 md:p-24 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            <div className="hidden md:block md:col-span-1 text-right">
                                {/* space */}
                            </div>
                            <div className="col-span-2 md:col-span-1 text-left">
                                <h1 className="text-3xl md:text-6xl font-bold tracking-wider mb-4">jacob makarsky</h1>
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-500 mb-8">dev</h2>
                                <p className="text-sm md:text-lg mb-2">creates things through software development</p>
                                <p className="text-sm md:text-lg mb-2">focuses on blockchain and disruptive technology</p>
                                <p className="text-sm md:text-lg mb-8">我会说一点中文 | Я учу русский</p>

                                <div className="flex flex-row space-x-4">
                                    <a href="https://www.psu.edu/news/academics/story/scholarships-help-aspiring-ist-entrepreneurs-pursue-degrees-business-ventures/">
                                        <Image src="/steelers.png" alt="Pittsburgh Steelers" width={100} height={60} className="rounded-full" />
                                    </a>

                                    <a href="https://www.psu.edu/news/academics/story/forbes-under-30-summit-memorable-extraordinary-experience/">
                                        <Image src="/pennState.png" alt="Penn State" width={180} height={60} className="rounded-full" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </Layout>
        </>
    );
}
