"use client";

import React from "react";
import "../styles/footer.css";
import { useSize } from "../tool/SizeContext";

const Footer = () => {
    const { sizeValue, setGlobalSizeValue } = useSize();
    if (sizeValue) {
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
                    <div className="email2">
                        rogo.wiki | msg2324@srh-spam.com | SPAM | PROJECT
                        ROGOWIKI
                    </div>
                </div>
            </div>
        );
    }
};
export default Footer;
