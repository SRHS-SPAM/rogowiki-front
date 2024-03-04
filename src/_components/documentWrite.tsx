import styles from "../styles/documentWrite.module.css";
import React from "react";
import MDEditor from "@uiw/react-markdown-editor";
import { md } from "node-forge";
import MdEditor from "./mdEditor";

const DocumentMain = () => {
  return (
    <div className={styles.mainbox}>
      <div className={styles.titlebox}>
        <div className={styles.title}>로고위키</div>
        <div className={styles.delete}>삭제</div>
      </div>
      <div className={styles.category}>
        <div className={styles.categoryinfo}></div>
      </div>
      <div className={styles.writepage}>
        <div className={styles.writeheader}>
          <div className={styles.miniheader}>
            <div className={styles.pagetab}>편집기</div>
            <div className={styles.pagetab}>RAW 편집</div>
            <div className={styles.pagetab}>미리보기</div>
          </div>
        </div>
        <div className={styles.writemain}>
          <MdEditor />
        </div>
      </div>
    </div>
  );
};

export default DocumentMain;
