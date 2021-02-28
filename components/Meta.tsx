import React from "react";
import Head from "next/head";

// Util
import { useLocale } from "../util/locale";

const Meta: React.FC = () => {
    const locale = useLocale();

    return (
        <Head>
            <title>
                {locale.getMessage({
                    id: "Common.Title",
                    defaultMessage: "Twitch Support Tool",
                })}
            </title>
        </Head>
    );
};

export default Meta;
