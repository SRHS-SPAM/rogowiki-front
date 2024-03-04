import styles from "../styles/lists.module.css";
import { useSize } from "../tool/SizeContext";
import useComponentSize from "../tool/size";

interface ListsProps {
    lists: string[];
}

const Lists = ({ lists }: ListsProps) => {
    const [componentRef, size] = useComponentSize();
    const { sizeValue } = useSize();
    const renderContent = () => {
        if (sizeValue) {
            return (
                <div className={styles.listMain}>
                    <div className={styles.listTitle}>글 목록</div>
                    {lists.map((item, index) => (
                        <div key={index} className={styles.listList}>
                            {item}
                        </div>
                    ))}
                    <div className={styles.white}> </div>
                </div>
            );
        } else {
            return (
                <div className={styles.listMain2}>
                    <div className={styles.listTitle2}>글 목록</div>
                    {lists.map((item2, index2) => (
                        <div key={index2} className={styles.listList2}>
                            {item2}
                        </div>
                    ))}
                    <div className={styles.white}> </div>
                </div>
            );
        }
    };

    return (
        <div className={styles.listmain} ref={componentRef}>
            {renderContent()}
        </div>
    );
};

export default Lists;
