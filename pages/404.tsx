import React from "react";
import Head from 'next/head';

export default function NotFoundPage() {
    return (
        <>
            <Head>
                <title>404 - Jacob Makarsky Not Found</title>
                <meta name="description" content="404 - Jacob Makarsky Not Found" />
            </Head>

            <main className="flex min-h-screen flex-col items-center justify-center p-24">
                <h1 className="text-4xl font-bold mb-4">404: Not Found</h1>
                <p className="text-lg">The page you are looking for doesn&#39;t exist in this timeline &lt;/3</p>
            </main>
        </>
    );
}
