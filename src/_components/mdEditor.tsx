import React, { useState } from "react";
import MDEditor from "@uiw/react-markdown-editor";
import styles from "../styles/documentWrite.module.css";

const MdEditor = () => {
  const [markdown, setMarkdown] = useState("# Hello, Markdown!");

  return (
    <div className={styles.writemain} style={{ overflow: "auto" }}>
      <div style={{ height: "100%" }}>
        <MDEditor value={markdown} onChange={setMarkdown} />
      </div>
    </div>
  );
};

export default MdEditor;
