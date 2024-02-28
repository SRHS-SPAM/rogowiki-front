import styles from "../styles/documentWrite.module.css";
import React from "react";

const DocumentMain = () => {
  return (
    <div className={styles.mainbox}>
      <div className={styles.titlebox}>
        <div className="title">로고위키</div>
        <div className="delete">삭제</div>
      </div>
    </div>
  );
};

export default DocumentMain;
