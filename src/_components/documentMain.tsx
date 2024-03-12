import styles from "../styles/documentMain.module.css";
import { useSize } from "../tool/SizeContext";
import React from "react";

const DocumentMain = ({
    children,
    category,
    title,
}: {
    children: React.ReactNode;
    category: string[];
    title: String[];
}) => {
    const { sizeValue, setGlobalSizeValue } = useSize();
    let titlesize: number = 0;
    let titlesize2: number = 0;
    let borderv: string = "";
    let paddingv: string = "";
    let bottom: number = 0;
    if (sizeValue) {
        titlesize = 40;
        titlesize2 = 15;
        borderv = "2.5px #cccccc solid";
        paddingv = "5rem";
        bottom = 0;
    } else {
        titlesize = 24;
        titlesize2 = 12;
        borderv = "none";
        paddingv = "2rem";
        bottom = 100;
    }

    return (
        <div
            className={styles.mainbox}
            style={{ border: borderv, padding: paddingv }}
        >
            <div className={styles.subbox}>
                <div className={styles.titlebox}>
                    <div
                        className={styles.title}
                        style={{ fontSize: titlesize }}
                    >
                        {title}
                    </div>
                    <div className={styles.edit}>편집</div>
                </div>
                <div
                    className={styles.category}
                    style={{ fontSize: titlesize2 }}
                >
                    분류 : &nbsp;
                    {category.map((item, index) => (
                        <span
                            key={index}
                            className={styles.categoryItem}
                            style={{ fontSize: titlesize2 }}
                        >
                            {item}
                            &nbsp;
                        </span>
                    ))}
                </div>
            </div>

            {children}

            <div className={styles.infobox}>
                <div className={styles.maininfo}>
                    <div className={styles.infotop}>
                        <img src="logo.png" alt="logo" className="logo" />
                    </div>
                    <div
                        className={styles.infobot}
                        style={{ marginBottom: bottom }}
                    >
                        로고위키는 공식 역사서 및 백과사전이 아니며 검증되지
                        않았거나, 편향적이거나, 잘못된 서술이 있을 수 있습니다.
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DocumentMain;
