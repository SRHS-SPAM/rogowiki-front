// OpentabEmpty 컴포넌트 수정
import styles from "../styles/opentabsEmpty.module.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface OpentabEmptyProps {
    title: string;
    children?: React.ReactNode; // children을 받을 수 있도록 수정
}

function OpentabEmpty({ title, children }: OpentabEmptyProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleTopboxClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.mainbox}>
            <div className={styles.topbox} onClick={handleTopboxClick}>
                <div
                    className={`${styles.open_arrow} ${
                        isOpen ? styles.rotated : ""
                    }`}
                >
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#757575" }}
                        size="2x"
                    />
                </div>
                <div className={styles.open_title}>{title}</div>
            </div>
            <div className={`${styles.botbox} ${isOpen ? styles.open : ""}`}>
                {isOpen && children}
            </div>
        </div>
    );
}

export default OpentabEmpty;
