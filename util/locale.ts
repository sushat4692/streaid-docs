import { useContext } from "react";

// Context
import LocaleContext from "../context/locale";

// Messages
import enMessages from "../lang/en-us";
import jpMessages from "../lang/ja-jp";

export const useLocale = () => {
    const locale = useContext(LocaleContext);
    const messages = ((): { [key: string]: string } => {
        switch (locale) {
            case "en-us":
                return enMessages;
            case "ja-jp":
                return jpMessages;
            default:
                return {};
        }
    })();

    const getMessage = (values: { id: string; defaultMessage?: string }) => {
        if (!messages[values.id]) {
            return values.defaultMessage || "";
        }

        return messages[values.id];
    };

    return {
        getMessage,
    };
};
