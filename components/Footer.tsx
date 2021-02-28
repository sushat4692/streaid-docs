import React from "react";

import styles from "../styles/components/Footer.module.css";

const Nav: React.FC = () => {
    return (
        <footer className={styles.wrap}>
            <div className={styles.inner}>
                <small>2021, SUSH</small>
            </div>
        </footer>
    );
};

export default Nav;
