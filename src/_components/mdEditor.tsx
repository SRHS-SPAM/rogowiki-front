import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import styles from "../styles/documentWrite.module.css";

interface MdEditorProps {
  selectedValue: string;
}

const MdEditor: React.FC<MdEditorProps> = ({ selectedValue }) => {
  const [markdown, setMarkdown] = useState<string>(selectedValue);

  useEffect(() => {
    // 부모 컴포넌트에서 selectedValue가 변경될 때마다 값을 업데이트합니다.
    setMarkdown(selectedValue);
  }, [selectedValue]);

  return (
    <div className={styles.writemain} style={{ overflow: "auto" }}>
      <div style={{ height: "100%" }}>
        <MDEditor
          value={markdown}
          height={"100%"}
          minHeight={30}
          visibleDragbar={false}
          onChange={(value) => setMarkdown(value || "")}
        />
      </div>
    </div>
  );
};

export default MdEditor;
