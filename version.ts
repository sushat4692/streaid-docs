import fs from "fs";
import path from "path";

// Messages
import enMessages from "./lang/en-us";
import jpMessages from "./lang/ja-jp";

type Data = {
    latest: string;
    history: {
        version: string;
        "en-us": string[];
        "ja-jp": string[];
    }[];
};

const version: Data = {
    latest: "0.1.1",
    history: [],
};

// v0.3.0
version.history.push({
    version: "0.3.0",
    "en-us": [
        enMessages["Component.History.v0.3.0-1"],
        enMessages["Component.History.v0.3.0-2"],
        enMessages["Component.History.v0.3.0-3"],
    ],
    "ja-jp": [
        jpMessages["Component.History.v0.3.0-1"],
        jpMessages["Component.History.v0.3.0-2"],
        jpMessages["Component.History.v0.3.0-3"],
    ],
});

// v0.2.1
version.history.push({
    version: "0.2.1",
    "en-us": [enMessages["Component.History.v0.2.1"]],
    "ja-jp": [jpMessages["Component.History.v0.2.1"]],
});

// v0.2.0
version.history.push({
    version: "0.2.0",
    "en-us": [enMessages["Component.History.v0.2.0"]],
    "ja-jp": [jpMessages["Component.History.v0.2.0"]],
});

// v0.1.2
version.history.push({
    version: "0.1.2",
    "en-us": [enMessages["Component.History.v0.1.2"]],
    "ja-jp": [jpMessages["Component.History.v0.1.2"]],
});

// v0.1.1
version.history.push({
    version: "0.1.1",
    "en-us": [
        enMessages["Component.History.v0.1.1-1"],
        enMessages["Component.History.v0.1.1-2"],
        enMessages["Component.History.v0.1.1-3"],
        enMessages["Component.History.v0.1.1-4"],
    ],
    "ja-jp": [
        jpMessages["Component.History.v0.1.1-1"],
        jpMessages["Component.History.v0.1.1-2"],
        jpMessages["Component.History.v0.1.1-3"],
        jpMessages["Component.History.v0.1.1-4"],
    ],
});

// v0.1.0
version.history.push({
    version: "0.1.0",
    "en-us": [enMessages["Component.History.v0.1.0"]],
    "ja-jp": [jpMessages["Component.History.v0.1.0"]],
});

// v0.0.6
version.history.push({
    version: "0.0.6",
    "en-us": [
        enMessages["Component.History.v0.0.6-1"],
        enMessages["Component.History.v0.0.6-2"],
    ],
    "ja-jp": [
        jpMessages["Component.History.v0.0.6-1"],
        jpMessages["Component.History.v0.0.6-2"],
    ],
});

// v0.0.5
version.history.push({
    version: "0.0.5",
    "en-us": [
        enMessages["Component.History.v0.0.5-1"],
        enMessages["Component.History.v0.0.5-2"],
    ],
    "ja-jp": [
        jpMessages["Component.History.v0.0.5-1"],
        jpMessages["Component.History.v0.0.5-2"],
    ],
});

// v0.0.4
version.history.push({
    version: "0.0.4",
    "en-us": [
        enMessages["Component.History.v0.0.4-1"],
        enMessages["Component.History.v0.0.4-2"],
        enMessages["Component.History.v0.0.4-3"],
    ],
    "ja-jp": [
        jpMessages["Component.History.v0.0.4-1"],
        jpMessages["Component.History.v0.0.4-2"],
        jpMessages["Component.History.v0.0.4-3"],
    ],
});

// v0.0.3
version.history.push({
    version: "0.0.3",
    "en-us": [enMessages["Component.History.v0.0.3"]],
    "ja-jp": [jpMessages["Component.History.v0.0.3"]],
});

// v0.0.2
version.history.push({
    version: "0.0.2",
    "en-us": [enMessages["Component.History.v0.0.2"]],
    "ja-jp": [jpMessages["Component.History.v0.0.2"]],
});

// v0.0.1
version.history.push({
    version: "0.0.1",
    "en-us": [enMessages["Component.History.v0.0.1"]],
    "ja-jp": [jpMessages["Component.History.v0.0.1"]],
});

const outFile = path.join(__dirname, "public", "version.json");
fs.writeFileSync(outFile, JSON.stringify(version));
