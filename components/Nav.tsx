import React from "react";

// Util
import { useLocale } from "../util/locale";

import styles from "../styles/components/Nav.module.css";

const Nav: React.FC = () => {
    const locale = useLocale();
    const url = (() => {
        switch (locale.getLocale()) {
            case "en-us":
                return "/jp";
            case "ja-jp":
            default:
                return "/";
        }
    })();

    return (
        <div className={styles.container}>
            <a
                href="https://github.com/sushat4692/streaid"
                target="_blank"
                rel="noreferrer"
                className={`button button--outline ${styles.button}`}
            >
                <i className="bi bi-github list__item__icon"></i>
                Repository
            </a>
            <a href={url} className={`button button--outline ${styles.button}`}>
                <i className="bi bi-type list__item__icon"></i>
                {locale.getMessage({ id: "Nav.Language.Switch" })}
            </a>
        </div>
    );
};

export default Nav;
