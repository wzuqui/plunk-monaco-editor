import React, { useState } from "react";

import Editor from "@monaco-editor/react";
import { emmetHTML } from "emmet-monaco-es";

import { html5code, csscode, tscode, markdowncode } from "./SeedWork";

import logoSvg from "./assets/logo.svg";
import "./App.css";

type tabs = "html" | "css" | "ts" | "markdown";

function App() {
  const [tab, setTab] = useState<tabs>("html");

  function handleEditorDidMount() {
    emmetHTML();
  }

  return (
    <div className="app">
      <nav>
        <img src={logoSvg} />
        <button
          onClick={() => setTab("html")}
          className={tab === "html" ? "active" : undefined}
        >
          HTML
        </button>
        <button
          onClick={() => setTab("css")}
          className={tab === "css" ? "active" : undefined}
        >
          CSS
        </button>
        <button
          onClick={() => setTab("ts")}
          className={tab === "ts" ? "active" : undefined}
        >
          TS
        </button>
        <button
          onClick={() => setTab("markdown")}
          className={tab === "markdown" ? "active" : undefined}
        >
          MARKDOWN
        </button>
      </nav>
      <section>
        <div className={["editor", tab === "html" ? "active" : ""].join(" ")}>
          <Editor
            height="100vh"
            width="100vw"
            theme="dark"
            language="text/html"
            value={html5code}
            editorDidMount={handleEditorDidMount}
          />
        </div>
        <div className={["editor", tab === "css" ? "active" : ""].join(" ")}>
          <Editor
            height="100vh"
            width="100vw"
            theme="dark"
            value={csscode}
            language="text/css"
          />
        </div>
        <div className={["editor", tab === "ts" ? "active" : ""].join(" ")}>
          <Editor
            height="100vh"
            width="100vw"
            theme="dark"
            value={tscode}
            language="typescript"
          />
        </div>
        <div
          className={["editor", tab === "markdown" ? "active" : ""].join(" ")}
        >
          <Editor
            height="100vh"
            width="100vw"
            theme="dark"
            value={markdowncode}
            language="markdown"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
