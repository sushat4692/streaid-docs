import React from "react";

// Util
import { useLocale } from "../util/locale";

const AuthorComponent: React.FC = () => {
    const locale = useLocale();

    return (
        <section className="section">
            <div className="section__inner">
                <h2 className="headline">
                    {locale.getMessage({
                        id: "Component.Author.Header",
                        defaultMessage: "Author",
                    })}
                </h2>

                <p className="lead">SUSH (sushat4692)</p>

                <ul className="list">
                    <li className="list__item">
                        <a
                            href="https://www.twitch.tv/sushat4692"
                            target="_blank"
                            rel="noreferrer"
                            className="link-text"
                        >
                            <i className="bi bi-twitch list__item__icon"></i>
                            Twitch
                        </a>
                    </li>
                    <li className="list__item">
                        <a
                            href="https://twitter.com/sushat4692"
                            target="_blank"
                            rel="noreferrer"
                            className="link-text"
                        >
                            <i className="bi bi-twitter list__item__icon"></i>
                            Twitter
                        </a>
                    </li>
                    <li className="list__item">
                        <a
                            href="https://github.com/sushat4692"
                            target="_blank"
                            rel="noreferrer"
                            className="link-text"
                        >
                            <i className="bi bi-github list__item__icon"></i>
                            GitHub
                        </a>
                    </li>
                </ul>

                <p
                    className="help-text"
                    dangerouslySetInnerHTML={{
                        __html: locale.getMessage({
                            id: "Component.Author.HelpText",
                        }),
                    }}
                ></p>
            </div>
        </section>
    );
};

export default AuthorComponent;
