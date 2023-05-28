import React from "react";
import Layout from "../components/layout";
import Head from "next/head";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Jacob Makarsky - Software Developer</title>
                <meta name="description" content="Get in touch with Jacob Makarsky, a Software Developer focusing on blockchain and disruptive technology." />
            </Head>

            <Layout>
                <main className="flex min-h-screen flex-col items-center justify-center p-24">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-1xl md:text-2xl mb-4" style={{ letterSpacing: "0.2rem" }}>jacobmakarsky@gmail.com</h1>
                    </div>
                </main>
            </Layout>
        </>
    );
}
