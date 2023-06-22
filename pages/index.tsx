import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Layout from '@/components/layout';
import { Cat } from '@/components/Cat';
import Head from 'next/head'

// This could be a simple loading spinner or any other component you want
const Loader = () => (
  <div>
    <p>Loading...</p>
  </div>
);

export default function Landing() {
  return (
    <>
      <Head>
        <title>Jacob Makarsky - Software Developer</title>
        <meta name="description" content="Jacob Makarsky, Software Developer focusing on blockchain and disruptive technology" />
      </Head>

      <Layout>
        <Suspense fallback={<Loader />}>
          <Canvas shadows={true}>
            <directionalLight position={[0, 10, 10]} intensity={1} castShadow />

            <Suspense fallback={null}>
              <Cat />
            </Suspense>
          </Canvas>
        </Suspense>
      </Layout>
    </>
  );
}
