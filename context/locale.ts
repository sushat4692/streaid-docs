import React from "react";

export type LocaleString = "ja-jp" | "en-us";

const LocaleContext = React.createContext<LocaleString>("en-us");

export default LocaleContext;
