import React from "react";

// Context
import LocaleContext from "../context/locale";

// Component
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Install from "../components/Install";
import History from "../components/History";
import Author from "../components/Author";
import Footer from "../components/Footer";

const Home: React.FC = () => {
    return (
        <LocaleContext.Provider value="en-us">
            <Meta />
            <Nav />

            <Hero />

            <main>
                <Introduction />
                <Install />
                <History />
                <Author />
            </main>

            <Footer />
        </LocaleContext.Provider>
    );
};

export default Home;
