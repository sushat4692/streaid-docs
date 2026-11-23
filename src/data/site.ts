export type Locale = "en" | "ja";

export interface SiteCopy {
    htmlLang: string;
    metaTitle: string;
    appName: string;
    tagline: string;
    description: string;
    nav: {
        repository: string;
        switch: string;
    };
    intro: {
        header: string;
        description: string;
        features: string[];
    };
    install: {
        header: string;
        description: string;
        button: string;
        requirements: string;
        note: string;
    };
    history: {
        header: string;
    };
    author: {
        header: string;
        helpText: string;
    };
    footer: string;
}

export const site: Record<Locale, SiteCopy> = {
    en: {
        htmlLang: "en",
        metaTitle: "Streaid — Twitch streaming assistant",
        appName: "Streaid",
        tagline: "Aiding your streaming",
        description:
            "A native desktop app for Twitch streamers: Japanese ↔ English translation, dictionary lookup, chatters/raiders tracking, custom commands, shoutouts and OBS overlays.",
        nav: {
            repository: "Repository",
            switch: "日本語",
        },
        intro: {
            header: "Introduction",
            description:
                "Streaid supports your Twitch stream with chat tools for translation, engagement and alerts.",
            features: [
                "Real-time Japanese ↔ English translation (`!ts`) and dictionary lookup (`!d`).",
                "Use Gemini or the optional on-device Bonsai local model.",
                "Track chatters and raiders with desktop notifications and configurable sounds.",
                "Custom commands with broadcaster / mod / vip / everyone permissions, plus `!dice`.",
                "Keep user memos for chatters and streamers.",
                "Run shoutouts (`!so`, `!stop`) with profile and clip alerts.",
                "Add translation and alert overlays to OBS as Browser Sources.",
                "Switch between Japanese and English UI.",
                "Post dictionary lookups to Discord with a Webhook.",
            ],
        },
        install: {
            header: "Installation",
            description: "Download the latest macOS build from GitHub Releases.",
            button: "Download latest version",
            requirements: "Requires macOS 13 or later (Apple Silicon).",
            note: "The DMG is ad-hoc signed and not notarized. If macOS blocks it, right-click the app and choose Open.",
        },
        history: {
            header: "Update History",
        },
        author: {
            header: "Author",
            helpText: `If you find an issue, please post it to <a href="https://github.com/sushat4692/streaid/issues" target="_blank" rel="noreferrer" class="link-text">GitHub Issues</a> or send a DM on Twitch or Twitter. Thank you!`,
        },
        footer: "2026, SUSH",
    },
    ja: {
        htmlLang: "ja",
        metaTitle: "Streaid — Twitch配信支援ツール",
        appName: "Streaid",
        tagline: "配信を支援するツール",
        description:
            "Twitch配信者向けのネイティブデスクトップアプリ。日本語↔英語翻訳、辞書検索、チャッター/レイダー追跡、カスタムコマンド、シャウトアウト、OBSオーバーレイを提供します。",
        nav: {
            repository: "リポジトリ",
            switch: "English",
        },
        intro: {
            header: "紹介",
            description:
                "Streaidは、翻訳・エンゲージメント・アラートをまとめて支援するTwitch配信向けツールです。",
            features: [
                "日本語↔英語のリアルタイム翻訳（`!ts`）と辞書検索（`!d`）。",
                "Gemini またはオンデバイスの Bonsai ローカルモデルを利用可能。",
                "チャッター/レイダーを追跡し、デスクトップ通知と効果音で知らせます。",
                "配信者/モデレーター/VIP/全員の権限付きカスタムコマンドと `!dice`。",
                "チャッターや配信者のユーザーメモを保存できます。",
                "シャウトアウト（`!so` / `!stop`）とプロフィール/クリップアラート。",
                "翻訳・アラート用のOBSブラウザソース。",
                "日本語 / 英語のUI切り替え。",
                "Discord Webhook への辞書検索結果の投稿。",
            ],
        },
        install: {
            header: "インストール",
            description: "最新のmacOS版をGitHub Releasesからダウンロードできます。",
            button: "最新版をダウンロード",
            requirements: "macOS 13以降（Apple Silicon）が必要です。",
            note: "DMGはad-hoc署名のため公証されていません。macOSでブロックされた場合は、アプリを右クリックして「開く」を選択してください。",
        },
        history: {
            header: "更新履歴",
        },
        author: {
            header: "作者",
            helpText: `不具合など見つかりましたら<a href="https://github.com/sushat4692/streaid/issues" target="_blank" rel="noreferrer" class="link-text">GitHub Issues</a>へ投稿するか、Twitch・TwitterのDMまでご連絡ください。`,
        },
        footer: "2026, SUSH",
    },
};
