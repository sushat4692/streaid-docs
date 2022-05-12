import React from "react";

// Util
import { useLocale } from "../util/locale";

import styles from "../styles/components/Hero.module.css";

const HeroComponent: React.FC = () => {
    const locale = useLocale();

    return (
        <div className={styles.wrap}>
            <div className={styles.inner}>
                <h1 className={styles.title}>
                    {locale.getMessage({
                        id: "Common.Title",
                        defaultMessage: "Streaid",
                    })}
                </h1>
            </div>
        </div>
    );
};

export default HeroComponent;
