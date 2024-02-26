import React, { useState } from "react";
import styles from "../styles/opentab.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Opentab() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTopboxClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.mainbox}>
      <div className={styles.topbox} onClick={handleTopboxClick}>
        <div className={`${styles.open_arrow} ${isOpen ? styles.rotated : ""}`}>
          <FontAwesomeIcon icon={faChevronRight} style={{ color: "#757575" }} />
        </div>
        <div className={styles.open_title}>논란</div>
      </div>
      <div className={`${styles.botbox} ${isOpen ? styles.open : ""}`}>
        {isOpen && (
          <>
            밤 새고 잠깐 의자에서 졸다가 작업하는거 진짜 이게 맞나 모르겠다
            졸리고 힘들고 슬프고 외롭구나...
          </>
        )}
      </div>
    </div>
  );
}

export default Opentab;
