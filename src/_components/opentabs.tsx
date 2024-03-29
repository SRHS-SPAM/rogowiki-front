import styles from "../styles/opentab.module.css";
import { useSize } from "../tool/SizeContext";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface OpentabProps {
    title: string;
    value: string[][];
    size: (number | undefined)[][];
    color: string[];
}

function Opentab({ title, value, size, color }: OpentabProps) {
    let titlesize: number = 0;
    let iconsize: string = "";
    const { sizeValue } = useSize();
    const [isOpen, setIsOpen] = useState(false);
    if (sizeValue) {
        titlesize = 40;
        iconsize = "2x";
    } else {
        titlesize = 20;
        iconsize = "x";
    }
    const handleTopboxClick = () => {
        setIsOpen(!isOpen);
    };

    const getColor = (index: number): string => {
        return color[index] !== "" ? color[index] : "#666";
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
                        {value.map((lineArray, outerIndex) => (
                            <React.Fragment key={outerIndex}>
                                {lineArray.map((line, innerIndex) => (
                                    <React.Fragment key={innerIndex}>
                                        <span
                                            style={{
                                                fontSize:
                                                    size[outerIndex][
                                                        innerIndex
                                                    ] !== undefined
                                                        ? size[outerIndex][
                                                              innerIndex
                                                          ]
                                                        : 24,
                                                color: getColor(outerIndex),
                                            }}
                                        >
                                            {line}
                                        </span>
                                        <br />
                                    </React.Fragment>
                                ))}
                                <br />
                            </React.Fragment>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Opentab;
