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
                <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-2">
                    <div className="flex flex-col items-center justify-center text-center">
                        <a href="mailto: jacobmakarsky@gmail.com" className="text-gray-600 hover:text-gray-800 text-1xl md:text-2xl mb-4" style={{ letterSpacing: "0.2rem" }}>jacobmakarsky@gmail.com</a>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center space-y-4">
                        <a href="https://twitter.com/jamaka_eth" className="text-gray-600 hover:text-gray-800" style={{ letterSpacing: "0.1rem" }}>
                            twitter
                        </a>

                        <a href="https://www.linkedin.com/in/jacobmakarsky/" className="text-gray-600 hover:text-gray-800" style={{ letterSpacing: "0.1rem" }}>
                            linkedIn
                        </a>

                        <a href="https://github.com/jacobmakarsky" className="text-gray-600 hover:text-gray-800" style={{ letterSpacing: "0.1rem" }}>
                            github
                        </a>
                    </div>
                </main>
            </Layout>
        </>
    );
}
