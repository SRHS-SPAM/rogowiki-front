"use client";

import "../styles/footer.css";
import useComponentSize from "../tool/size";

const Footer = () => {
    const [componentRef, size] = useComponentSize();
    const renderContent = () => {
        if (size.width > 800) {
            // 가로너비가 600보다 큰 경우
            return (
                <div className="footer">
                    <div className="main2">
                        <div className="images">
                            <img src="github.png" alt="git" className="git" />
                            <div className="text">|</div>
                            <img src="insta.png" alt="insta" className="git" />
                        </div>
                        <div className="email">
                            rogo.wiki | msg2324@srh-spam.com | SPAM | PROJECT
                            ROGOWIKI{" "}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="footer">
                    <div className="main2">
                        <div className="images">
                            <img src="github.png" alt="git" className="git" />
                            <div className="text">|</div>
                            <img src="insta.png" alt="insta" className="git" />
                        </div>
                        <div className="email">
                            rogo.wiki | msg2324@srh-spam.com | SPAM | PROJECT
                            ROGOWIKI{" "}
                        </div>
                    </div>
                </div>
            );
        }
    };
    return (
        <div className="footer" ref={componentRef}>
            {renderContent()}
        </div>
    );
};
export default Footer;
