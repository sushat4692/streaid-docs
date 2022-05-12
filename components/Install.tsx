import React from "react";

// Util
import { useLocale } from "../util/locale";

const InstallComponent: React.FC = () => {
    const locale = useLocale();

    return (
        <section className="section">
            <div className="section__inner">
                <h2 className="headline">
                    {locale.getMessage({
                        id: "Component.Install.Header",
                        defaultMessage: "Installation",
                    })}
                </h2>

                <p className="lead">
                    {locale.getMessage({
                        id: "Component.Install.Description",
                        defaultMessage:
                            "You can download latest version from the following link.",
                    })}
                </p>

                <a
                    href="https://github.com/sushat4692/streaid/releases/latest"
                    target="_blank"
                    rel="noreferrer"
                    className="button"
                >
                    {locale.getMessage({
                        id: "Component.Install.Button",
                        defaultMessage: "Download latest Version",
                    })}
                </a>
            </div>
        </section>
    );
};

export default InstallComponent;
