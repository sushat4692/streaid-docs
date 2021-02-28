import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default MyApp;
