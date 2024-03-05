import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const mkdStr = `# Markdown Editor

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;

const Com = () => {
  const [value, setValue] = useState(mkdStr);
  return (
    <>
      <div className="container">
        <MDEditor
          height={200}
          value={value}
          onChange={(e) => {
            setValue(e as string);
          }}
        />
      </div>
    </>
  );
};

export default Com;
