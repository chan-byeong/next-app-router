import { marked } from "marked";

export default async function ServerMarkdownPage() {
  const html = await fetch(
    "https://raw.githubusercontent.com/chan-byeong/promise-practice/main/README.md"
  ).then((r) => r.text());

  return <section>{html}</section>;
}
