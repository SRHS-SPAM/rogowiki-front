import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import styles from "../styles/documentWrite.module.css";

interface MdEditorProps {
  selectedValue: string;
}

const MdEditor: React.FC<MdEditorProps> = ({ selectedValue }) => {
  const [markdown, setMarkdown] = useState<string>(selectedValue);

  return (
    <div className={styles.writemain} style={{ overflow: "auto" }}>
      <div style={{ height: "100%" }}>
        <MDEditor
          defaultValue={selectedValue}
          value={markdown}
          height={"100%"}
          minHeight={30}
          visibleDragbar={false}
          onChange={(value) => setMarkdown(value || "")}
        />
        <MDEditor.Markdown
          source={markdown}
          style={{ whiteSpace: "pre-wrap" }}
        />
      </div>
    </div>
  );
};

export default MdEditor;
