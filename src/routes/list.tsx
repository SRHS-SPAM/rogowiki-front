"use client";

import { SizeProvider } from "../tool/SizeContext";
import "../App.css";
import Footer from "../_components/footer";
import Header from "../_components/header";
import Lists from "../_components/lists";
import { Helmet } from "react-helmet";

const lists = [
    "[학생]국재윤",
    "[학생]지민철",
    "[동아리]산업용로봇",
    "[분류]제목",
];
function List() {
    return (
        <>
            <Helmet>
                <title>글목록</title>
                <meta name="description" content="최근 글목록" />
            </Helmet>
            <SizeProvider>
                <div className="toempty">
                    <Header />
                    <div className="mainasd">
                        <Lists lists={lists} />
                    </div>
                    <Footer />
                </div>
            </SizeProvider>
        </>
    );
}

export default List;
