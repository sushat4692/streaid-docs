export type HistoryLocale = "en" | "ja";

export interface HistoryEntry {
    version: string;
    en: string[];
    ja: string[];
}

export const latest = "0.7.0";

export const history: HistoryEntry[] = [
    {
        version: "0.7.0",
        en: [
            "Native SwiftUI macOS app on a UI-agnostic Rust core.",
            "Chatter/raider tracking with notifications and sounds, custom commands and user memos.",
            "Shoutouts, info/clip alert overlay and Discord webhook for `!d`.",
            "Japanese / English UI and read-only Twitch Helix lookups.",
            "Removed the gpui frontend and added DMG packaging.",
        ],
        ja: [
            "UI非依存のRustコア上にネイティブSwiftUIアプリを実装。",
            "チャッター/レイダー追跡、通知、効果音、カスタムコマンド、ユーザーメモ。",
            "シャウトアウト、情報/クリップのアラートオーバーレイ、`!d`のDiscord Webhook。",
            "日本語/英語UIと読み取り専用のTwitch Helix連携。",
            "gpui版を削除し、DMGパッケージを追加。",
        ],
    },
    {
        version: "0.6.0",
        en: [
            "Rewrote the UI with gpui.",
            "Added vocabulary tracking with AI inflection analysis.",
            "Added .app / .dmg packaging.",
            "Quit when the last window is closed.",
        ],
        ja: [
            "UIをgpuiで再実装。",
            "AI活用形分析付きの語彙追跡を追加。",
            ".app / .dmgパッケージを追加。",
            "最後のウィンドウを閉じると終了するように変更。",
        ],
    },
    {
        version: "0.5.0",
        en: [
            "Tauri 2 + React rewrite.",
            "Twitch OAuth device flow and client ID management.",
            "Gemini translation/dictionary and the Bonsai local model.",
            "OBS overlay, notification sounds and Model Test.",
            "Gemini rate limiting and local fallback.",
        ],
        ja: [
            "Tauri 2 + Reactで再実装。",
            "Twitch OAuthデバイスフローとクライアントID管理。",
            "Gemini翻訳/辞書とBonsaiローカルモデル。",
            "OBSオーバーレイ、効果音、モデルテスト。",
            "Geminiのレート制限とローカルフォールバック。",
        ],
    },
    {
        version: "0.4.1",
        en: [
            "Added English → English dictionary (`!e2e`).",
            "Added the About panel and GitHub Actions release workflow.",
        ],
        ja: [
            "英→英辞書（`!e2e`）を追加。",
            "AboutパネルとGitHub Actionsのリリースワークフローを追加。",
        ],
    },
    {
        version: "0.4.0",
        en: [
            "Renamed the application to Streaid.",
            "Optimized the Japanese dictionary and updated dependencies.",
        ],
        ja: ["アプリ名を「Streaid」に変更。", "和英辞書データの最適化と依存ライブラリの更新。"],
    },
    {
        version: "0.3.2",
        en: ["Fixed dependency/build issues."],
        ja: ["依存ライブラリとビルドの不具合を修正。"],
    },
    {
        version: "0.3.1",
        en: ["Added the Japanese → English dictionary (`!j2e`)."],
        ja: ["和英辞書コマンド（`!j2e`）を追加。"],
    },
    {
        version: "0.3.0",
        en: [
            "Updated dependencies and build tooling.",
            "Separated username and display name for raids.",
            "Fixed the sign-out issue.",
        ],
        ja: [
            "依存ライブラリとビルドツールを更新。",
            "レイド時のユーザー名と表示名を分離。",
            "サインアウト時の不具合を修正。",
        ],
    },
    {
        version: "0.2.1",
        en: ["Fixed the word dictionary."],
        ja: ["単語辞書の不具合を修正。"],
    },
    {
        version: "0.2.0",
        en: ["Added Discord posting for dictionary lookups."],
        ja: ["Discordへの辞書検索結果の投稿を追加。"],
    },
    {
        version: "0.1.2",
        en: ["Added version check / update notification."],
        ja: ["バージョンチェック機能を追加。"],
    },
    {
        version: "0.1.1",
        en: ["Fixed a memory leak and dictionary counter issues."],
        ja: ["メモリーリークと辞書の検索回数に関する不具合を修正。"],
    },
    {
        version: "0.1.0",
        en: [
            "Added `!ts` translation and the English → Japanese dictionary (`!e2j`).",
            "Added translation settings and dictionary search counts.",
        ],
        ja: [
            "`!ts`翻訳と英→日辞書（`!e2j`）を追加。",
            "翻訳設定と辞書の検索回数を追加。",
        ],
    },
    {
        version: "0.0.6",
        en: ["Added custom commands."],
        ja: ["カスタムコマンド機能を追加。"],
    },
    {
        version: "0.0.5",
        en: ["Added the Socket.IO alert server and shoutout alerts."],
        ja: ["Socket.IOアラートサーバーとシャウトアウトアラートを追加。"],
    },
    {
        version: "0.0.4",
        en: ["Added user memos, dark mode, chat sounds and shoutout clip alerts."],
        ja: ["ユーザーメモ、ダークモード、チャット効果音、シャウトアウトのクリップアラートを追加。"],
    },
    {
        version: "0.0.3",
        en: ["Added the application menu and license page."],
        ja: ["アプリケーションメニューとライセンスページを追加。"],
    },
    {
        version: "0.0.2",
        en: ["Fixed packaging and lint configuration."],
        ja: ["パッケージ設定とLint設定を修正。"],
    },
    {
        version: "0.0.1",
        en: ["Initial Electron release with chat tracking, notifications, sounds and shoutouts."],
        ja: ["チャット追跡、通知、効果音、シャウトアウトを備えたElectron版の初回リリース。"],
    },
];

const plainText = (text: string) => text.replace(/`/g, "");

export const versionPayload = {
    latest,
    history: history.map((entry) => ({
        version: entry.version,
        "en-us": entry.en.map(plainText),
        "ja-jp": entry.ja.map(plainText),
    })),
};
