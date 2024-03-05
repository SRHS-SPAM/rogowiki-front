import MDEditor from "@uiw/react-md-editor";
import React from "react";
// import styled from "@emotion/styled";
import DocumentMain from "./documentMain";
import ReactMarkdown from "react-markdown";
import { useSize } from "../tool/SizeContext";
import OpentabEmpty from "./opentabsEmpty";
const markdown = `# 논란
 -하나둘셋넷

- 로렘잇섬로렘잇섬로렘잇섬로렘잇섬로렘잇섬
 
 \`\`\`지민철\`\`\`

 # 어록
 하나둘셋넷

 로렘잇섬로렘잇섬로렘잇섬로렘잇섬로렘잇섬
 `;
// const MarkDownStyle = styled.div`
//     font-size: 1rem;
//     line-height: 2.5rem;
// `;
// const BlockQuoteStyle = styled.blockquote`
//     padding: 1rm;
//     border: 1px dashed black;
// `;
// function BlockQuote(children: { children: React.ReactNode }) {
//     return <BlockQuoteStyle>{children.children}</BlockQuoteStyle>;
// }
const View = () => {
    return (
        <DocumentMain category={["학생"]} title={["국재윤"]}>
            <OpentabEmpty title={"내용"}>
                <OpentabEmpty title={"asdf"}></OpentabEmpty>
                {/* <MarkDownStyle>
                    <ReactMarkdown renderers={{ blockquote: BlockQuote }}>
                        {markdown}
                    </ReactMarkdown>
                </MarkDownStyle> */}
            </OpentabEmpty>
        </DocumentMain>
    );
};

export default View;
