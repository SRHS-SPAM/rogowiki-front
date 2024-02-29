"use client";

import React from "react";
import "../../styles/mainboxcomponentscss/pyo.css";
import { useSize } from "../../tool/SizeContext";
import useComponentSize from "../../tool/size";

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
const Pyo = () => {
    const { sizeValue } = useSize();
    const [componentRef, size] = useComponentSize();

    const renderContent = () => {
        if (sizeValue) {
            return (
                <div className="pyomain">
                    <div className="pyo1">
                        <div className="pyo3">
                            <div className="pyo4">서울로봇고등학교</div>
                            <div className="pyo5">
                                SEOUL ROBOTICS HIGH SCHOOL
                            </div>
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
                        <div className="wbbox">
                            {data2.map((item, index) => (
                                <div key={index} className="wb">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="pyomain2">
                    <div className="pyo12">
                        <div className="pyo3">
                            <div className="pyo42">서울로봇고등학교</div>
                            <div className="pyo52">
                                SEOUL ROBOTICS HIGH SCHOOL
                            </div>
                        </div>
                    </div>
                    <div className="img2">
                        <img src="srh.png" alt="srh_logo" className="srh" />
                    </div>
                    <div className="saero">
                        <div>
                            {data1.map((item, index) => (
                                <div key={index} className="yb2">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="wbbox">
                            {data2.map((item, index) => (
                                <div key={index} className="wb2">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
    };
    return <div ref={componentRef}>{renderContent()}</div>;
};
export default Pyo;
