import styles from "../styles/documentWrite.module.css";
import React, { useState } from "react";
import MDEditor from "@uiw/react-markdown-editor";
import MdEditor from "./mdEditor";

const DocumentWrite = () => {
  const [selectedValue, setSelectedValue] = useState<string>("Option 1");

  return (
    <div className={styles.mainbox}>
      <div className={styles.titlebox}>
        <div className={styles.titletop}>
          <div className={styles.title}>로고위키</div>
          <div className={styles.delete}>삭제</div>
        </div>
        <div className={styles.titlebot}>
          <div>
            <input
              type="radio"
              id="option1"
              name="testOptions"
              value="Option 1"
              checked={selectedValue === "Option 1"}
              onChange={() => setSelectedValue("Option 1")}
            />
            <label htmlFor="option1">학생</label>
          </div>
          <div>
            <input
              type="radio"
              id="option2"
              name="testOptions"
              value="Option 2"
              checked={selectedValue === "Option 2"}
              onChange={() => setSelectedValue("Option 2")}
            />
            <label htmlFor="option2">동아리</label>
          </div>
          <div>
            <input
              type="radio"
              id="option3"
              name="testOptions"
              value="Option 3"
              checked={selectedValue === "Option 3"}
              onChange={() =>
                setSelectedValue(
                  (prevValue) => `${prevValue}
                # 개요 개요
                ssadas`
                )
              }
            />
            <label htmlFor="option3">선생님</label>
          </div>
        </div>
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
          <MdEditor selectedValue={selectedValue} />
        </div>
      </div>
    </div>
  );
};

export default DocumentWrite;
