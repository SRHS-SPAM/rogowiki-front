import React from "react";
import styles from "../styles/documentMain.module.css";

const DocumentMain = ({
  children,
  category,
}: {
  children: React.ReactNode;
  category: String[];
}) => {
  return (
    <div className={styles.mainbox}>
      <div className={styles.subbox}>
        <div className={styles.titlebox}>
          <div className={styles.title}>감자</div>
          <div className={styles.edit}>편집</div>
        </div>
        <div className={styles.category}>
          분류 : &nbsp;
          {category.map((item, index) => (
            <span key={index} className={styles.categoryItem}>
              {item}
              &nbsp;
            </span>
          ))}
        </div>
      </div>

      {children}

      <div className={styles.infobox}>
        <div className={styles.maininfo}>
          <div className={styles.infotop}>로고위키 들어갈 곳</div>
          <div className={styles.infobot}>
            로고위키는 공식 역사서 및 백과사전이 아니며 검증되지 않았거나,
            편향적이거나, 잘못된 서술이 있을 수 있습니다.
          </div>
        </div>
      </div>
    </div>
  );
};
export default DocumentMain;
