import React from 'react';

import Editor from '@monaco-editor/react';
import { emmetHTML } from "emmet-monaco-es";

import './App.css';

function App() {
  function handleEditorDidMount() {
    emmetHTML();
  }


  return (
    <div className="App">
      <Editor
              height="90vh"
              theme="dark"
              language="text/html"
              editorDidMount={handleEditorDidMount}
              />
    </div>
  );
}

export default App;
