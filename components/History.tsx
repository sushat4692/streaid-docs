import React from "react";

// Util
import { useLocale } from "../util/locale";

const HistoryComponent: React.FC = () => {
    const locale = useLocale();

    return (
        <section className="section">
            <div className="section__inner">
                <h2 className="headline">
                    {locale.getMessage({
                        id: "Component.History.Header",
                        defaultMessage: "Update History",
                    })}
                </h2>

                <h3 className="headline--sub">v0.0.5</h3>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.0.5-1",
                        })}
                    </li>
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.0.5-2",
                        })}
                    </li>
                </ul>

                <h3 className="headline--sub">v0.0.4</h3>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.0.4-1",
                        })}
                    </li>
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.0.4-2",
                        })}
                    </li>
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.0.4-3",
                        })}
                    </li>
                </ul>

                <h3 className="headline--sub">v0.0.3</h3>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.0.3",
                        })}
                    </li>
                </ul>

                <h3 className="headline--sub">v0.0.2</h3>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.0.2",
                        })}
                    </li>
                </ul>

                <h3 className="headline--sub">v0.0.1</h3>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.0.1",
                        })}
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default HistoryComponent;
