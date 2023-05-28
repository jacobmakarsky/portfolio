import React from "react";
import Layout from "../components/layout";

export default function Contact() {
    return (
        <Layout>
            <main className="flex min-h-screen flex-col items-center justify-center p-24">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-2xl mb-4" style={{ letterSpacing: "0.2rem" }}>jacobmakarsky@gmail.com</h1>
                </div>
            </main>
        </Layout>
    );
}
