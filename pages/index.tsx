import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Layout from '@/components/layout';
import { Cat } from '@/components/Cat';

export default function Landing() {
  return (
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
  );
}
