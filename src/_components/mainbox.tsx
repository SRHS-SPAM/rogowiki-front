"use client";

import "../styles/mainbox.css";
import { useSize } from "../tool/SizeContext";
import DocumentMain from "./documentMain";
import Pyo from "./mainboxcomponents/pyo";
import Time from "./mainboxcomponents/time";
import Opentab from "./opentabs";
import OpentabEmpty from "./opentabsEmpty";

const MainBox = () => {
    const { sizeValue } = useSize();
    let value1size: number[][] = [[0], [0], [0]];
    let value2size: number[][] = [[0], [0], [0]];
    let mainsize: string = "";
    if (sizeValue) {
        value1size = [
            [30, 30],
            [30, 30],
            [30, 30],
        ];
        value2size = [
            [40, 24],
            [40, 24],
            [40, 24],
            [40, 24],
        ];
        mainsize = "mainbox";
    } else {
        value1size = [
            [10, 10],
            [10, 10],
            [10, 10],
        ];
        value2size = [
            [14, 10],
            [14, 10],
            [14, 10],
            [14, 10],
        ];
        mainsize = "mainbox2";
    }
    return (
        <div className={mainsize}>
            <DocumentMain category={["로고위키"]} title={["로고위키:대문"]}>
                <Tree />
                <div className="line"></div>
                <Pyo />
                <Opentab
                    value={[
                        [
                            `환영합니다. 서울로봇고등학교의 위키 로고위키입니다.`,
                            "서울로봇고등학교 학생, 선생님이라면 누구나 문서를 편집하고 작성할 수 있습니다.",
                        ],
                        [
                            "사실에 근거하고 남을 비방하거나 칭찬하지 않는 선에서 자유롭게 문서를 편집할 수 있습니다.",
                            "문의 및 문서삭제는 a24746440@gmail.com으로 요청하실 수 있습니다.",
                        ],
                        [
                            "교내의 모든 유/무선 네트워크 정보는 국가정보원 『국가·공공기관의 무선망 구축 보안 가이드라인, 국가정보보안 기본지침』 과,",
                            "교육부 『정보보안기본지침』에 따라 대외비로 관리되고 있으니 절대로 기재해서는 안 됩니다.",
                        ],
                    ]}
                    title={"개요"}
                    size={value1size}
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
                    size={value2size}
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

export const Tree = () => {
    const { sizeValue } = useSize();
    let titlesize3: number = 0;
    let titlesize4: number = 0;
    let titlesize5: number = 0;
    if (sizeValue) {
        titlesize3 = 28;
        titlesize4 = 18;
        titlesize5 = 15;
    } else {
        titlesize3 = 14;
        titlesize4 = 12;
        titlesize5 = 9;
    }
    return (
        <div className="tree">
            <span className="tree1" style={{ fontSize: titlesize3 }}>
                여러분이 가꾸어 나가는{" "}
            </span>
            <span className="tree2" style={{ fontSize: titlesize3 }}>
                지식의 나무
                <br />
            </span>
            <span className="tree3" style={{ fontSize: titlesize4 }}>
                로고위키
            </span>
            <span className="tree4" style={{ fontSize: titlesize4 }}>
                에 오신 것을 환영합니다!
                <br />
                <br />
            </span>
            <span className="tree5" style={{ fontSize: titlesize5 }}>
                로고위키는 누구나 기여할 수 있는 위키입니다.
                <br />
                검증되지 않았거나 편향된 내용이 있을 수 있습니다.
            </span>
        </div>
    );
};
