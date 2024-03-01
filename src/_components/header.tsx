"use client";

import { Link } from "react-router-dom";
import "../styles/header.css";
import { useSize } from "../tool/SizeContext";
import useComponentSize from "../tool/size";
import { Search } from "lucide-react";

const Header = () => {
    const { sizeValue, setGlobalSizeValue } = useSize();
    const [componentRef, size] = useComponentSize();
    if (size.width > 1070) {
        setGlobalSizeValue(true);
    } else {
        setGlobalSizeValue(false);
    }
    const renderContent = () => {
        if (sizeValue) {
            // 가로너비가 600보다 큰 경우
            return (
                <div className="header">
                    <div className="main">
                        <div className="any">
                            <img src="logo.png" alt="logo" className="logo" />
                            <div className="list">
                                <Link
                                    to="/list"
                                    className="p"
                                    style={{ textDecoration: "none" }}
                                >
                                    글목록
                                </Link>
                                <button className="p">공지</button>
                                <button className="p">글쓰기</button>
                                <button className="p">정보</button>
                            </div>
                        </div>
                        <div className="searchbox">
                            <input type="text" className="search"></input>
                            <div className="search2">
                                <Search
                                    color="#FFE05E"
                                    className="searchlogo"
                                />
                            </div>
                            <div className="log">
                                <button className="e">로그인</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="header">
                    <div className="header2">
                        <div className="main23">
                            <img src="logo.png" alt="logo2" className="logo2" />
                            <div className="any23">
                                <div className="list">
                                    <Link
                                        to="/list"
                                        className="p2"
                                        style={{ textDecoration: "none" }}
                                    >
                                        글목록
                                    </Link>
                                    <button className="p2">공지</button>
                                    <button className="p3">글쓰기</button>
                                    <button className="p2">정보</button>
                                    <div className="log2">
                                        <button className="e2">로그인</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="searchbox2">
                            <button className="searchtext2">
                                <div className="searchtext3">검색하기</div>
                            </button>
                            <input type="text" className="search3"></input>
                            <div className="search22">
                                <Search
                                    color="#FFE05E"
                                    className="searchlogo2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };
    return <div ref={componentRef}>{renderContent()}</div>;
};
export default Header;
