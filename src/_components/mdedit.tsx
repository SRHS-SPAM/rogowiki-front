import React from "react";

interface Props {
    markdown: string;
}

const MyComponent = ({ markdown }: Props) => {
    // 줄바꿈을 기준으로 각 섹션을 배열로 분리
    const sections = markdown.split("\n");

    // 각 섹션에서 타이틀과 값을 추출하여 리스트로 저장
    const titles: string[] = [];
    const values: string[] = [];
    sections.forEach((section) => {
        // 공백을 기준으로 섹션을 분리
        const [title, value] = section.split("#").map((s) => s.trim());

        // 타이틀이 존재하면 제목 리스트에 추가
        if (title) {
            titles.push(title);
        }

        // 값이 존재하면 내용 리스트에 추가
        if (value) {
            values.push(value);
        }
    });

    // 리스트 2개를 반환
    return [titles, values];
};
export default MyComponent;
