import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Layout from '../components/layout';

const Cubes = ({ number }) => {
    const speed = 0.1;

    const cubes = [...Array(number)].map((_, i) => {
        const ref = useRef();

        useFrame(() => {
            if (ref.current) {
                if (ref.current.position.y > -20) {
                    ref.current.position.y -= speed;
                } else {
                    ref.current.position.y = 20 + Math.random() * 5;
                    ref.current.position.x = -5 + Math.random() * 10;
                    ref.current.position.z = -5 + Math.random() * 10;
                    ref.current.material.color.setRGB(Math.random(), Math.random(), Math.random());
                }
            }
        });

        return (
            <Box
                key={i}
                castShadow
                receiveShadow
                position={[-5 + Math.random() * 10, 20 + i, -5 + Math.random() * 10]}
                ref={ref}
            >
                <meshStandardMaterial attach="material" />
            </Box>
        );
    });

    return <>{cubes}</>;
};

export default function About() {
    return (
        <Layout>
            <div className="relative">
                <main className="flex min-h-screen flex-col items-center justify-center p-24 relative z-10">
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="col-span-2 md:col-span-1">
                            {/* Rest of the content */}
                        </div>

                        <div className="col-span-2 md:col-span-1 text-left">
                            <h1 className="text-6xl font-bold tracking-wider mb-4">jacob makarsky</h1>
                            <h2 className="text-4xl font-bold text-gray-500 mb-8">software dev</h2>
                            <p className="text-lg mb-2">creates things through software development</p>
                            <p className="text-lg mb-2">focuses on blockchain and disruptive technology</p>
                            <p className="text-lg mb-8">我会说一点中文 | Я учу русский</p>
                        </div>
                    </div>
                </main>

                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <Canvas className="w-full h-full">
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Cubes number={20} />
                    </Canvas>
                </div>
            </div>
        </Layout>
    );
}
