import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import DocumentMain from "./documentMain";
import MyComponent from "./mdedit";
import OpentabEmpty from "./opentabsEmpty";
import ApiComponent from "../tool/apicall";
import { useSize } from "../tool/SizeContext";
interface MyData {
    _id: string;
    category: string;
    date: string;
    description: string;
    name: string;
    title: string;
    uuid: string;
}
const markdown = `# 논란
 - 하나둘셋넷

- 로렘잇섬로렘잇섬로렘잇섬로렘잇섬로렘잇섬

 # 어록
 하나둘셋넷

 로렘잇섬로렘잇섬로렘잇섬로렘잇섬로렘잇섬
 `;

const View = () => {
    const [titless, valuess] = MyComponent({ markdown });
    const [apiData, setApiData] = useState<MyData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const apiData: MyData = await ApiComponent();
            setApiData(apiData);
        };

        fetchData();
    }, []);

    if (!apiData) {
        return <p>Loading...</p>;
    }

    return (
        <DocumentMain category={[apiData.category]} title={[apiData.title]}>
            <OpentabEmpty title={"내용"}>
                {titless.map((value, index) => (
                    <OpentabEmpty title={value} key={index}>
                        <ReactMarkdown>{valuess[index]}</ReactMarkdown>
                    </OpentabEmpty>
                ))}
            </OpentabEmpty>
        </DocumentMain>
    );
};

export default View;
