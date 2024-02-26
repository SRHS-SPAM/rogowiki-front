"use client";

import "./header.css";
import { Search } from "lucide-react";

const Header = () => {
    return (
        <div className="header">
            <div className="main">
                <div className="any">
                    <img src="logo.png" alt="logo" className="logo" />
                    <div className="list">
                        <button className="p">학교</button>
                        <button className="p">공지</button>
                        <button className="p">글쓰기</button>
                        <button className="p">정보</button>
                    </div>
                </div>
                <div className="searchbox">
                    <input type="text" className="search"></input>
                    <div className="search2">
                        <Search color="#FFE05E" className="searchlogo" />
                    </div>
                </div>
                <div className="log">
                    <button className="e">log In</button>
                    <button className="e">sign In</button>
                </div>
            </div>
            {/* <div className="navsub">
                <div className="d">
                    <div className="c">학생</div>
                    <div className="c">선생님</div>
                    <div className="c">동아리</div>
                </div>
                <div className="d">
                    <div className="c">공지사항</div>
                    <div className="c">방명록</div>
                    <div className="c">처리방침</div>
                    <div className="c">문의하기</div>
                </div>
                <div className="d">
                    <div className="c">사건</div>
                    <div className="c">인기</div>
                </div>
                <div className="d">
                    <div className="c">정보</div>
                </div>
            </div> */}
        </div>
    );
};
export default Header;
