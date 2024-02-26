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
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className={styles.open_title}>논란</div>
      </div>
      <div className={`${styles.botbox} ${isOpen ? styles.open : ""}`}>
        대충 설명
      </div>
    </div>
  );
}

export default Opentab;
