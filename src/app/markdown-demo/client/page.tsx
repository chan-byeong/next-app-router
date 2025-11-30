"use client";
import { marked } from "marked";
import { useEffect, useState } from "react";

export default function ClientMarkdownPage() {
  const [html, setHtml] = useState("");
  useEffect(() => {
    const fetchText = async () => {
      const data = await fetch(
        "https://raw.githubusercontent.com/chan-byeong/promise-practice/main/README.md"
      ).then((r) => r.text());
      setHtml(data);
    };
    fetchText();
  });

  return <section>{html}</section>;
}
