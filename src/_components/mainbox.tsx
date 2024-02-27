"use client";

import { ChevronDown } from "lucide-react";
import "../styles/mainbox.css";
import DocumentMain from "./documentMain";
import Opentab from "./opentabs";
import OpentabEmpty from "./opentabsEmpty";

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
const time1 = [
    "1교시",
    "2교시",
    "3교시",
    "4교시",
    "점심시간",
    "5교시",
    "6교시",
    "7교시",
];
const time2 = [
    "8시 40분 ~ 9시 30분",
    "9시 40분 ~ 10시 30분",
    "10시 40분 ~ 11시 30분",
    "11시 40분 ~ 12시 30분",
    "12시 30분 ~ 13시 20분",
    "13시 20분 ~ 14시 10분",
    "14시 20분 ~ 15시 10분",
    "15시 20분 ~ 16시 10분",
];

const MainBox = () => {
    return (
        <div className="mainbox">
            <DocumentMain category={["로고위키"]} title={["로고위키:대문"]}>
                <Tree />
                <div className="line"></div>
                <Pyo />
                <Opentab
                    value={[
                        [
                            "환영합니다! 서울로봇고등학교입니다.",
                            "로고위키에서는 누구나 문서를 편집하고 작성할 수 있습니다.",
                        ],
                        [
                            "사실에 근거하고 남을 비방하거나 칭찬하지 않는 선에서 자유롭게 문서를 편집할 수 있습니다.",
                            "문의 및 문서삭제는 bumawiki@gmail.com으로 요청하실 수 있습니다.",
                        ],
                        [
                            "교내의 모든 유/무선 네트워크 정보는 국가정보원 『국가·공공기관의 무선망 구축 보안 가이드라인, 국가정보보안 기본지침』 과,교육부 『정보보안기본지침』에 따라 대외비로 관리되고 있으니 절대로 기재해서는 안 됩니다.",
                            "",
                        ],
                    ]}
                    title={"개요"}
                    size={[[], [], []]}
                    color={["", "", "#000"]}
                />
                <Opentab
                    title={"학과"}
                    value={[
                        [
                            "첨단로봇설계과",
                            "4차 산업혁명의 핵심기술 분야인 스마트팩토리 구현을 위한 생산 공정의 장비들을 중심으로 제품설계, 조립 운용을 하여 데이터를 수집하고 이를 바탕으로 통합제어 할 수 있는 전문가 양성",
                        ],
                        [
                            "첨단로봇제어과",
                            "전기•전자분야의 이론, 실습을 중점적으로 학습하여 로봇을 제작, 운용할 수 있는 전자기기개발 및 하드웨어를 설계하고 아날로그•디지털 신호처리를 구현할 수 있는 능력을 배양하여 로봇제어 능력이 우수한 영마이스터를 양성",
                        ],
                        [
                            "첨단로봇시스템과",
                            "로봇을 제작•설계하기 위한 로봇하드웨어 관련 지식과 로봇 소프트웨어 개발을 위한 프로그래밍 이론과 실무능력을 겸비한 창의적이고 실용적인 로봇 시스템 개발 전문 영 마이스터 양성",
                        ],
                        [
                            "첨단로봇정보통신과",
                            "군 특성화과정을 운영하는 학과로 첨단로봇분야의 설계, 제어, 모션, 센서, 마이크로프로세서 및 프로그래밍에 대한 지식과 기능•기술을 바탕으로 군 정보통신 및 로봇개발, 드론, IOT 등 첨단로봇분야의 영마이스터 양성",
                        ],
                    ]}
                    size={[
                        [40, 24],
                        [40, 24],
                        [40, 24],
                        [40, 24],
                    ]}
                    color={["", "", ""]}
                />
                <OpentabEmpty title={"일과"}>
                    <Time />
                </OpentabEmpty>
            </DocumentMain>
        </div>
    );
};
export default MainBox;
export const Time = () => {
    return (
        <div className="timebox">
            <div className="timetop">시간표</div>
            <div className="time">
                <div>
                    {time1.map((item, index) => (
                        <div
                            key={index}
                            className={item === "7교시" ? "time12" : "time1"}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div>
                    {time2.map((item, index) => (
                        <div
                            key={index}
                            className={
                                item === "15시 20분 ~ 16시 10분"
                                    ? "time22"
                                    : "time2"
                            }
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export const Tree = () => {
    return (
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
    );
};
export const Pyo = () => {
    return (
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
    );
};
