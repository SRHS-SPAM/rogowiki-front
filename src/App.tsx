"use client";

import { ChevronDown } from "lucide-react";
import "./App.css";

const data1 = [
    "교훈",
    "개교",
    "유형",
    "성별",
    "형태",
    "교목",
    "교화",
    "교장",
    "교감",
    "학생 수",
    "교직원 수",
    "관할 교육청",
    "주소",
    "홈페이지",
];
const data2 = [
    "勤勉(근면), 知性(지성), 創造(창조)",
    "1994년 1월 3일 강남공업고등학교",
    "마이스터고등학교",
    "남녀공학",
    "공립",
    "은행나무",
    "철쭉",
    "강상욱",
    "김성호",
    "420명 (2023.03.01)",
    "85명 (2023.03.01)",
    "서울특별시교육청 (강남서초)",
    "서울특별시 강남구 광평로 20길 63",
    "https://srobot.sen.hs.kr/",
];
const MainBox = () => {
    return (
        <div className="mainbox">
            <div className="title">로고위키: 대문</div>
            <div className="customContainer">
                <div className="customBox1" />
                <div className="customText1">분류 :</div>
                <div className="customText2">로고위키</div>
            </div>
            <div className="line"></div>
            <div className="tree">
                <span className="tree1">여러분이 가꾸어 나가는 </span>
                <span className="tree2">
                    지식의 나무
                    <br />
                </span>
                <span className="tree3">로고위키</span>
                <span className="tree4">
                    에 오신 것을 환영합니다!
                    <br />
                    <br />
                </span>
                <span className="tree5">
                    로고위키는 누구나 기여할 수 있는 위키입니다.
                    <br />
                    검증되지 않았거나 편향된 내용이 있을 수 있습니다.
                </span>
            </div>
            <div className="line2"></div>
            <div className="pyomain">
                <div className="pyo1">
                    <div className="pyo2"></div>
                    <div className="pyo3">
                        <div className="pyo4">서울로봇고등학교</div>
                        <div className="pyo5">SEOUL ROBOTICS HIGH SCHOOL</div>
                    </div>
                </div>
                <div className="img">
                    <img src="srh.png" alt="srh_logo" className="srh" />
                </div>
                <div className="saero">
                    <div>
                        {data1.map((item, index) => (
                            <div key={index} className="yb">
                                {item}
                            </div>
                        ))}
                    </div>
                    <div>
                        {data2.map((item, index) => (
                            <div key={index} className="wb">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="main-container">
                <div className="info-box">
                    교내의 모든 유/무선 네트워크 정보는 국가정보원
                    『국가·공공기관의 무선망 구축 보안 가이드라인, 국가정보보안
                    기본지침』 과, <br />
                    교육부 『정보보안기본지침』에 따라 대외비로 관리되고 있으니
                    절대로 기재해서는 안 됩니다.
                </div>
                <div className="welcome-box">
                    환영합니다! 서울로봇고등학교입니다.
                    <br />
                    로고위키에서는 누구나 문서를 편집하고 작성할 수 있습니다.
                    <br />
                    <br />
                    사실에 근거하고 남을 비방하거나 칭찬하지 않는 선에서
                    자유롭게 문서를 편집할 수 있습니다.
                    <br />
                    문의 및 문서삭제는 bumawiki@gmail.com으로 요청하실 수
                    있습니다.
                </div>
                <div className="divider"></div>
                <div className="section-header">
                    <div className="section-title">개요</div>
                    <ChevronDown className="section-icon" />
                </div>
            </div>
        </div>
    );
};
function App() {
    return (
        <div className="main">
            <MainBox />
        </div>
    );
}

export default App;
