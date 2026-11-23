import type { APIRoute } from "astro";

import { versionPayload } from "../data/history";

export const GET: APIRoute = () => {
    return new Response(JSON.stringify(versionPayload), {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });
};
