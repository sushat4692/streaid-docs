import React from "react";

// Util
import { useLocale } from "../util/locale";

const IntroductionComponent: React.FC = () => {
    const locale = useLocale();

    return (
        <section className="section">
            <div className="section__inner">
                <h2 className="headline">
                    {locale.getMessage({
                        id: "Component.Introducntion.Header",
                        defaultMessage: "Introduction",
                    })}
                </h2>
                <p className="lead">
                    {locale.getMessage({
                        id: "Component.Introducntion.Description",
                        defaultMessage: "Introduction",
                    })}
                </p>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.Introducntion.Feature1",
                            defaultMessage: "Introduction",
                        })}
                    </li>
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.Introducntion.Feature2",
                            defaultMessage: "Introduction",
                        })}
                    </li>
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.Introducntion.Feature3",
                            defaultMessage: "Introduction",
                        })}
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default IntroductionComponent;
