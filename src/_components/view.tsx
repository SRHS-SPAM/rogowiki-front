import Opentab from "../components/opentab";
import { useSize } from "../tool/SizeContext";
import ApiComponent from "../tool/apicall";
// import styled from "@emotion/styled";
import DocumentMain from "./documentMain";
import MyComponent from "./mdedit";
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

const View = () => {
    const [list1] = MyComponent({ markdown });

    return (
        <DocumentMain category={["학생"]} title={["국재윤"]}>
            <OpentabEmpty title={"내용"}>
                <OpentabEmpty title={"asdf"}>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </OpentabEmpty>
            </OpentabEmpty>
        </DocumentMain>
    );
};

export default View;
