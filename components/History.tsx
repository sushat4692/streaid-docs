import React from "react";

// Util
import { useLocale } from "../util/locale";

import styles from "../styles/components/History.module.css";

const HistoryComponent: React.FC = () => {
    const locale = useLocale();

    return (
        <section className={styles.section}>
            <h2 className={styles.header}>
                {locale.getMessage({
                    id: "Component.History.Header",
                    defaultMessage: "Update History",
                })}
            </h2>

            <h3 className={styles.version_name}>v0.0.2</h3>
            <ul className={styles.list}>
                <li className={styles.list__item}>
                    {locale.getMessage({
                        id: "Component.History.v0.0.2",
                    })}
                </li>
            </ul>

            <h3 className={styles.version_name}>v0.0.1</h3>
            <ul className={styles.list}>
                <li className={styles.list__item}>
                    {locale.getMessage({
                        id: "Component.History.v0.0.1",
                    })}
                </li>
            </ul>
        </section>
    );
};

export default HistoryComponent;
