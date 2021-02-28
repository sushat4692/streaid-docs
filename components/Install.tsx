import React from "react";

// Util
import { useLocale } from "../util/locale";

import styles from "../styles/components/Install.module.css";

const InstallComponent: React.FC = () => {
    const locale = useLocale();

    return (
        <section className={styles.section}>
            <h2 className={styles.header}>
                {locale.getMessage({
                    id: "Component.Install.Header",
                    defaultMessage: "Installation",
                })}
            </h2>

            <p className={styles.lead}>
                {locale.getMessage({
                    id: "Component.Install.Description",
                    defaultMessage:
                        "You can download latest version from the following link.",
                })}
            </p>

            <a
                href="https://github.com/sushat4692/twitch-support-tool/releases/latest"
                target="_blank"
                rel="noreferrer"
                className={styles.button}
            >
                {locale.getMessage({
                    id: "Component.Install.Button",
                    defaultMessage: "Download latest Version",
                })}
            </a>
        </section>
    );
};

export default InstallComponent;
