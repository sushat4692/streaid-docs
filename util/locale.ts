import { useCallback, useContext } from "react";

// Context
import LocaleContext, { LocaleString } from "../context/locale";

// Messages
import enMessages from "../lang/en-us";
import jpMessages from "../lang/ja-jp";

export const useLocale = () => {
    const locale = useContext(LocaleContext);
    const getLocale = useCallback(() => {
        return locale;
    }, [locale]);

    const getMessage = useCallback(
        (
            values: { id: string; defaultMessage?: string },
            lc?: LocaleString
        ) => {
            if (!lc) {
                lc = locale;
            }

            const messages = (() => {
                switch (lc) {
                    case "en-us":
                        return enMessages;
                    case "ja-jp":
                        return jpMessages;
                    default:
                        return {};
                }
            })();

            if (!messages[values.id]) {
                return values.defaultMessage || "";
            }

            return messages[values.id];
        },
        [locale]
    );

    return {
        getLocale,
        getMessage,
    };
};
