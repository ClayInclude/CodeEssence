import type {Options, ThemeConfig} from "@docusaurus/preset-classic";
import type {Config, I18nConfig} from "@docusaurus/types";

const math = require("remark-math");
const katex = require("rehype-katex");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const metaInfo: Pick<Config, "title" | "tagline" | "url" | "baseUrl"> =
    {
        title: "Code Essence",
        tagline: "Do not go gentle into that good night",
        url: "https://clayinclude.github.io/",
        baseUrl: "/CodeEssence/"
    };

const developInfo: Partial<Config> =
    {
        organizationName: "ClayInclude",
        projectName: "CodeEssence",
        deploymentBranch: "gh-pages",
        trailingSlash: false,
        onBrokenLinks: "throw",
        onBrokenMarkdownLinks: "warn"
    };

const stylesheets: Config["stylesheets"] =
    [
        {
            href: "Katex/katex.min.css",
            type: "text/css"
        }
    ];

const i18n: Partial<I18nConfig> =
    {
        defaultLocale: "zh-Hans",
        locales: ["zh-Hans"]
    };

// noinspection SpellCheckingInspection
const presetsOption: Options =
    {
        docs:
            {
                path: "Docs",
                remarkPlugins: [math],
                rehypePlugins: [katex]
            },
        blog: false,
        theme:
            {
                customCss: require.resolve("./Src/Css/Custom.css")
            }
    };

// noinspection SpellCheckingInspection
const themeConfig: ThemeConfig =
    {
        docs:
            {
                sidebar:
                    {
                        hideable: true,
                        autoCollapseCategories: true
                    }
            },
        navbar:
            {
                hideOnScroll: false,
                title: "Code Essence",
                items:
                    [
                        {
                            type: "doc",
                            docId: "Intro",
                            position: "left",
                            label: "Intro"
                        },
                        {
                            href: "https://github.com/clayinclude/CodeEssence",
                            position: "right",
                            className: "header-github-link",
                            "aria-label": "GitHub repository"
                        }
                    ]
            },
        footer:
            {
                style: "dark",
                links:
                    [
                        {
                            title: "Docs",
                            items:
                                [
                                    {
                                        label: "Intro",
                                        to: "/Docs/Intro"
                                    }
                                ]
                        }
                    ]
            },
        prism:
            {
                additionalLanguages: [
                    "armasm", "batch", "bash", "c", "csharp", "cpp", "cmake", "glsl", "go", "haskell", "hlsl",
                    "ignore", "java", "json", "kotlin", "latex", "lisp", "lua", "makefile", "markdown", "nasm",
                    "plant-uml", "powershell", "python", "cshtml", "jsx", "tsx", "rust", "shell-session", "sql",
                    "javascript", "typescript", "verilog", "vhdl"
                ],
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            },
        colorMode:
            {
                defaultMode: "dark",
                disableSwitch: false,
                respectPrefersColorScheme: true
            },
        liveCodeBlock:
            {
                playgroundPosition: "bottom"
            }
    };

const config: Config =
    {
        ...metaInfo,
        ...developInfo,
        stylesheets,
        i18n,
        staticDirectories: ["Static"],
        presets:
            [
                [
                    "classic",
                    presetsOption
                ]
            ],
        themeConfig: themeConfig
    };

module.exports = config;
