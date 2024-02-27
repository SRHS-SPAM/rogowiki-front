import styles from "../styles/lists.module.css";
import React from "react";

interface ListsProps {
    lists: string[];
}
const Lists = ({ lists }: ListsProps) => {
    return (
        <>
            <div className={styles.listMain}>
                <div className={styles.listTitle}>글 목록</div>
                {lists.map((item, index) => (
                    <div key={index} className={styles.listList}>
                        {item}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Lists;
