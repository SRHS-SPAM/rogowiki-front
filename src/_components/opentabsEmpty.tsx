// OpentabEmpty 컴포넌트 수정

import styles from "../styles/opentabsEmpty.module.css";
import { useSize } from "../tool/SizeContext";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface OpentabEmptyProps {
    title: string;
    children?: React.ReactNode; // children을 받을 수 있도록 수정
}

function OpentabEmpty({ title, children }: OpentabEmptyProps) {
    let titlesize: string = "";
    let iconsize: string = "";
    const { sizeValue } = useSize();
    const [isOpen, setIsOpen] = useState(false);
    if (sizeValue) {
        titlesize = "35px";
        iconsize = "xl";
    } else {
        titlesize = "20px";
        iconsize = "x";
    }
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
                        style={{
                            color: "#757575",
                            marginTop: "10px",
                        }}
                        size={iconsize as SizeProp}
                    />
                </div>
                <div
                    className={styles.open_title}
                    style={{ fontSize: titlesize }}
                >
                    {title}
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`${styles.botbox} ${
                            isOpen ? styles.open : ""
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default OpentabEmpty;
