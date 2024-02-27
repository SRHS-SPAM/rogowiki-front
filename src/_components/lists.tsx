import styles from "../styles/lists.module.css";
import useComponentSize from "../tool/size";

interface ListsProps {
    lists: string[];
}

const Lists = ({ lists }: ListsProps) => {
    const [componentRef, size] = useComponentSize();

    const renderContent = () => {
        if (size.width > 800) {
            return (
                <div className={styles.listMain}>
                    <div className={styles.listTitle}>글 목록</div>
                    {lists.map((item, index) => (
                        <div key={index} className={styles.listList}>
                            {item}
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <div className={styles.listMain2}>
                    <div className={styles.listTitle2}>글 목록</div>
                    {lists.map((item, index) => (
                        <div key={index} className={styles.listList2}>
                            {item}
                        </div>
                    ))}
                </div>
            );
        }
    };

    return (
        <div className={styles.listMain} ref={componentRef}>
            {renderContent()}
        </div>
    );
};

export default Lists;
