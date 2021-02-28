import React from "react";

import styles from "../styles/components/Nav.module.css";

const Nav: React.FC = () => {
    return (
        <div className={styles.container}>
            <a
                href="https://github.com/sushat4692/twitch-support-tool"
                target="_blank"
                rel="noreferrer"
                className="button button--outline"
            >
                <i className="bi bi-github list__item__icon"></i>
                Repository
            </a>
        </div>
    );
};

export default Nav;
