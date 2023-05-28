import React from "react";
import Head from 'next/head';

export default function NotFoundPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Head>
                <title>404: Not found</title>
            </Head>
            <h1 className="text-4xl font-bold mb-4">404: Not Found</h1>
            <p className="text-lg">You just hit a route that doesn&#39;t exist... the sadness.</p>
        </main>
    );
}
