import React from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";

// Component
import Nav from "../components/Nav";

const Home: React.FC = () => {
    return (
        <div className="outer">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="wrapper">
                <Nav></Nav>

                <p>Test</p>
            </div>
        </div>
    );
};

export default Home;
