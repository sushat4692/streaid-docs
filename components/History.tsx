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

                <h3 className="headline--sub">v0.4.0</h3>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.4.0-1",
                        })}
                    </li>
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.4.0-2",
                        })}
                    </li>
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.4.0-3",
                        })}
                    </li>
                </ul>

                <h3 className="headline--sub">v0.3.2</h3>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.3.2",
                        })}
                    </li>
                </ul>

                <h3 className="headline--sub">v0.3.1</h3>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.3.1",
                        })}
                    </li>
                </ul>

                <h3 className="headline--sub">v0.3.0</h3>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.3.0-1",
                        })}
                    </li>
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.3.0-2",
                        })}
                    </li>
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.3.0-3",
                        })}
                    </li>
                </ul>

                <h3 className="headline--sub">v0.2.1</h3>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.2.1",
                        })}
                    </li>
                </ul>

                <h3 className="headline--sub">v0.2.0</h3>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.2.0",
                        })}
                    </li>
                </ul>

                <h3 className="headline--sub">v0.1.2</h3>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.1.2",
                        })}
                    </li>
                </ul>

                <h3 className="headline--sub">v0.1.1</h3>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.1.1-1",
                        })}
                    </li>
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.1.1-2",
                        })}
                    </li>
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.1.1-3",
                        })}
                    </li>
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.1.1-4",
                        })}
                    </li>
                </ul>

                <h3 className="headline--sub">v0.1.0</h3>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.1.0",
                        })}
                    </li>
                </ul>

                <h3 className="headline--sub">v0.0.6</h3>
                <ul className="list">
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.0.6-1",
                        })}
                    </li>
                    <li className="list__item">
                        {locale.getMessage({
                            id: "Component.History.v0.0.6-2",
                        })}
                    </li>
                </ul>

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
