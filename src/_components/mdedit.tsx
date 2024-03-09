import React from "react";

interface Props {
    markdown: string;
}

const MyComponent = ({ markdown }: Props) => {
    // `;`로 구분된 각 섹션을 배열로 분리
    const sections = markdown.split(";");

    // 각 섹션에서 타이틀과 값을 추출하여 리스트로 저장
    const titles: string[] = [];
    const values: string[] = [];

    sections.forEach((section) => {
        const [title, value] = section.split("#").map((s) => s.trim());
        titles.push(title);
        values.push(value);
    });

    // 리스트 2개를 반환
    return [titles, values];
};

export default MyComponent;
