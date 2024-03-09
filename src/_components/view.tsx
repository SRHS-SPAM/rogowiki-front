import { useSize } from "../tool/SizeContext";
import ApiComponent from "../tool/apicall";
// import styled from "@emotion/styled";
import DocumentMain from "./documentMain";
import OpentabEmpty from "./opentabsEmpty";
import StyledTextComponent from "./titletest";
import MDEditor from "@uiw/react-md-editor";
import React from "react";
import ReactMarkdown from "react-markdown";

const markdown = `# 논란
 -하나둘셋넷

- 로렘잇섬로렘잇섬로렘잇섬로렘잇섬로렘잇섬
 
 \`\`\`지민철\`\`\`

 # 어록
 하나둘셋넷

 로렘잇섬로렘잇섬로렘잇섬로렘잇섬로렘잇섬
 `;

// const MarkDownStyle = styled.div`
//   font-size: 1rem;
//   line-height: 2.5rem;
// `;

const View = () => {
    return (
        <DocumentMain category={["학생"]} title={["국재윤"]}>
            <OpentabEmpty title={"내용"}>
                <OpentabEmpty title={"asdf"}>
                    {/* <MarkDownStyle> */}
                    <ReactMarkdown></ReactMarkdown>
                    {/* </MarkDownStyle> */}
                    {/* <ApiComponent/> */}
                </OpentabEmpty>
            </OpentabEmpty>
        </DocumentMain>
    );
};

export default View;
