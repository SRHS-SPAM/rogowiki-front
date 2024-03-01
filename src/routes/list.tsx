"use client";

import { SizeProvider } from "../tool/SizeContext";
import "../App.css";
import Footer from "../_components/footer";
import Header from "../_components/header";
import Lists from "../_components/lists";

const lists = [
    "[학생]국재윤",
    "[학생]지민철",
    "[동아리]산업용로봇",
    "[분류]제목",
];
function List() {
    return (
        <>
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
