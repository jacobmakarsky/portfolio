import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Layout from '@/components/layout';
import { Cat } from '@/components/Cat';
import Head from 'next/head'

export default function Landing() {
  return (
    <>
      <Head>
        <title>Jacob Makarsky - Software Developer</title>
        <meta name="description" content="Jacob Makarsky, Software Developer focusing on blockchain and disruptive technology" />
      </Head>

      <Layout>
        <Suspense fallback={<span>loading...</span>}>
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
