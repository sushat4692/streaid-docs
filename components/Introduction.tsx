import React from "react";

// Util
import { useLocale } from "../util/locale";

import styles from "../styles/components/Introduction.module.css";

const IntroductionComponent: React.FC = () => {
    const locale = useLocale();

    return (
        <section className={styles.section}>
            <h2 className={styles.header}>
                {locale.getMessage({
                    id: "Component.Introducntion.Header",
                    defaultMessage: "Introduction",
                })}
            </h2>
            <p className={styles.lead}>
                {locale.getMessage({
                    id: "Component.Introducntion.Description",
                    defaultMessage: "Introduction",
                })}
            </p>
            <ul className={styles.list}>
                <li className={styles.list__item}>
                    {locale.getMessage({
                        id: "Component.Introducntion.Feature1",
                        defaultMessage: "Introduction",
                    })}
                </li>
                <li className={styles.list__item}>
                    {locale.getMessage({
                        id: "Component.Introducntion.Feature2",
                        defaultMessage: "Introduction",
                    })}
                </li>
                <li className={styles.list__item}>
                    {locale.getMessage({
                        id: "Component.Introducntion.Feature3",
                        defaultMessage: "Introduction",
                    })}
                </li>
            </ul>
        </section>
    );
};

export default IntroductionComponent;
