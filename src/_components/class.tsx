import styles from "../styles/class.module.css";
import { useSize } from "../tool/SizeContext";
import DocumentMain from "./documentMain";
import OpentabEmpty from "./opentabsEmpty";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface ListsProps {
    teacherlist: string[];
    studentlist: string[];
}
const ClassList = ({ teacherlist, studentlist }: ListsProps) => {
    const grades = [1, 2, 3];
    const initialIsOpenArray = grades.map(() =>
        Array(teacherlist.length).fill(false)
    );
    const [isOpenArray, setIsOpenArray] = useState(initialIsOpenArray);
    const { sizeValue } = useSize();
    let stsize: string = "";
    let stsize2: string = "";
    let stsize3: string = "";
    let blocksize1: string = "";
    let blocksize2: string = "";
    let topmargin: string = "";
    let studentheight: string = "";
    if (sizeValue) {
        stsize = "20px";
        stsize2 = "32px";
        stsize3 = "16px";
        blocksize1 = "100px";
        blocksize2 = "47px";
        topmargin = "10px";
        studentheight = "240px";
    } else {
        stsize = "10px";
        stsize2 = "16px";
        stsize3 = "12px";
        blocksize1 = "52px";
        blocksize2 = "26px";
        topmargin = "0";
        studentheight = "135px";
    }
    const handleTopboxClick = (gradeIndex: number, classIndex: number) => {
        const newIsOpenArray = [...isOpenArray];
        newIsOpenArray[gradeIndex][classIndex] =
            !newIsOpenArray[gradeIndex][classIndex];
        setIsOpenArray(newIsOpenArray);
    };
    return (
        <DocumentMain category={["학생"]} title={["로고위키:학생"]}>
            {grades.map((grade, gradeIndex) => (
                <OpentabEmpty title={`2024년도 ${grade}학년`} key={gradeIndex}>
                    {teacherlist.map((teacher, classIndex) => (
                        <div className={styles.classall} key={classIndex}>
                            <div
                                className={styles.classbox}
                                style={{
                                    height: blocksize1,
                                    lineHeight: blocksize1,
                                }}
                            >
                                <div className={styles.classban}>
                                    <div
                                        className={styles.ban}
                                        style={{
                                            fontSize: stsize2,
                                            marginTop: topmargin,
                                        }}
                                    >
                                        {grade}학년 {classIndex + 1}반
                                    </div>
                                    <div
                                        className={styles.click}
                                        style={{ fontSize: stsize3 }}
                                        onClick={() =>
                                            handleTopboxClick(
                                                gradeIndex,
                                                classIndex
                                            )
                                        }
                                    >
                                        [{" "}
                                        {isOpenArray[gradeIndex][classIndex]
                                            ? "접기"
                                            : "펼치기"}{" "}
                                        ]
                                    </div>
                                </div>
                            </div>
                            <AnimatePresence>
                                {isOpenArray[gradeIndex][classIndex] && (
                                    <>
                                        <motion.div
                                            className={styles.classteacher}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            style={{
                                                height: blocksize2,
                                                fontSize: stsize3,
                                                lineHeight: blocksize2,
                                            }}
                                        >
                                            담임 선생님
                                        </motion.div>
                                        <motion.div
                                            className={styles.classtitle}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            style={{
                                                height: blocksize2,
                                                fontSize: stsize3,
                                                lineHeight: blocksize2,
                                            }}
                                        >
                                            {teacher}
                                        </motion.div>
                                        <motion.div
                                            className={styles.classteacher}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            style={{
                                                height: blocksize2,
                                                fontSize: stsize3,
                                                lineHeight: blocksize2,
                                            }}
                                        >
                                            구성원
                                        </motion.div>
                                        <motion.div
                                            className={styles.students}
                                            style={{ height: studentheight }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            {studentlist.map((item, index) => (
                                                <motion.div
                                                    className={styles.student}
                                                    style={Object.assign(
                                                        {},
                                                        {
                                                            borderRight:
                                                                (index + 1) %
                                                                    4 ===
                                                                0
                                                                    ? "1px"
                                                                    : "none",
                                                        },
                                                        { fontSize: stsize },
                                                        {
                                                            height: blocksize2,
                                                            lineHeight:
                                                                blocksize2,
                                                        }
                                                    )}
                                                    key={index}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                >
                                                    {item}
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </OpentabEmpty>
            ))}
        </DocumentMain>
    );
};
export default ClassList;
