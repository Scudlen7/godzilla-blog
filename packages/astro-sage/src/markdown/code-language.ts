import { definePlugin } from "astro-expressive-code";

/** Display names for common fence languages; anything else shows as written. */
const NAMES: Record<string, string> = {
  js: "JavaScript",
  javascript: "JavaScript",
  mjs: "JavaScript",
  cjs: "JavaScript",
  jsx: "JSX",
  ts: "TypeScript",
  typescript: "TypeScript",
  mts: "TypeScript",
  tsx: "TSX",
  py: "Python",
  python: "Python",
  rb: "Ruby",
  rs: "Rust",
  rust: "Rust",
  go: "Go",
  c: "C",
  cpp: "C++",
  "c++": "C++",
  cs: "C#",
  csharp: "C#",
  java: "Java",
  kt: "Kotlin",
  kotlin: "Kotlin",
  swift: "Swift",
  sh: "Shell",
  bash: "Bash",
  zsh: "Zsh",
  shell: "Shell",
  ps1: "PowerShell",
  powershell: "PowerShell",
  sql: "SQL",
  html: "HTML",
  css: "CSS",
  scss: "SCSS",
  json: "JSON",
  jsonc: "JSON",
  yaml: "YAML",
  yml: "YAML",
  toml: "TOML",
  md: "Markdown",
  markdown: "Markdown",
  mdx: "MDX",
  astro: "Astro",
  diff: "Diff",
  dockerfile: "Dockerfile",
  graphql: "GraphQL",
  lua: "Lua",
  r: "R",
  latex: "LaTeX",
  tex: "LaTeX",
  hs: "Haskell",
  haskell: "Haskell",
};

export function pluginLanguageLabel() {
  return definePlugin({
    name: "astro-sage-language-label",
    hooks: {
      postprocessRenderedBlock: ({ codeBlock, renderData }) => {
        renderData.blockAst.properties["data-language-label"] =
          NAMES[codeBlock.language.toLowerCase()] ??
          (codeBlock.language || "Text");
      },
    },
  });
}
