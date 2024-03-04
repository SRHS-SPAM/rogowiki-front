import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import styles from "../styles/opentab.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function App() {
    return (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <div
                style={{
                    width: "1120px",
                    height: "0px",
                    left: "0px",
                    top: "72px",
                    position: "absolute",
                    border: "3px #CCCCCC solid",
                }}
            ></div>
            <div
                style={{
                    left: "7px",
                    top: "0px",
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "16px",
                    display: "inline-flex",
                }}
            >
                <div
                    style={{
                        width: "12.50px",
                        height: "25px",
                        transform: "rotate(90deg)",
                        transformOrigin: "0 0",
                        border: "4px #757575 solid",
                    }}
                ></div>
                <div
                    style={{
                        color: "black",
                        fontSize: "40px",
                        fontFamily: "Pretendard",
                        fontWeight: "500",
                        wordWrap: "break-word",
                    }}
                >
                    논란
                </div>
            </div>
            <div
                style={{
                    width: "1016px",
                    left: "48px",
                    top: "123px",
                    position: "absolute",
                    color: "#666666",
                    fontSize: "24px",
                    fontFamily: "Pretendard",
                    fontWeight: "400",
                    wordWrap: "break-word",
                }}
            >
                항상 배가 고프다.
            </div>
        </div>
    );

// function Opentab() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleTopboxClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={styles.mainbox}>
//       <div className={styles.topbox} onClick={handleTopboxClick}>
//         <div className={`${styles.open_arrow} ${isOpen ? styles.rotated : ""}`}>
//           <FontAwesomeIcon icon={faChevronRight} style={{ color: "#757575" }} />
//         </div>
//         <div className={styles.open_title}>논란</div>
//       </div>
//       <div className={`${styles.botbox} ${isOpen ? styles.open : ""}`}>
//         {isOpen && (
//           <>
//             밤 새고 잠깐 의자에서 졸다가 작업하는거 진짜 이게 맞나 모르겠다
//             졸리고 힘들고 아프고 피곤하고 슬프고 외롭구나...
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Opentab;
